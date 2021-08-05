import { useState, useEffect } from "react";
import Amplify from "aws-amplify";
import { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import UploadImage from "./Components/UploadImage";
import ListAllImages from "./Components/ListAllImages";
import ListDbImages from "./Components/ListDbImages";
import ShowMyImages from "./Components/ShowMyImages";
import BigImage from './Components/BigImage'

import { API, graphqlOperation } from "aws-amplify";
import { listUserIdentitys } from "./graphql/queries";
import { createUserIdentity } from "./graphql/mutations";

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

function App() {
  let userDataDetail = {
    myIdentityId: "",
    groupIdentityIds: "",
    tenant: "",
    myGroups: [],
    username: "",
  };
  //  Po naplneni to bude nieco ako: 
  //  groupIdentityIds: Array(2)
  //    0: "eu-central-1:cb51182d-37e5-4e28-a469-67e333d4608e"
  //    1: "eu-central-1:31abecf5-89a3-4d0c-9129-fb9301639a7b"
  //  myGroups: Array(1)
  //    0: "company:IBM"
  //  myIdentityId: "eu-central-1:cb51182d-37e5-4e28-a469-67e333d4608e"
  //  tenant: "company:IBM"
  //  username: "uptest2"
  const [userData, setUserData] = useState(userDataDetail);


  useEffect(() => {
    // set the user attributes to state variable userData
    const fetchUserIdentity = async () => {
      const userInfo = await Auth.currentUserInfo();
      // Idnetity object:
      // {
      //   "id": "eu-central-1:31abecf5-89a3-4d0c-9129-fb9301639a7b",
      //   "username": "uptest",
      //   "attributes": {
      //       "sub": "aecb732a-cf99-4702-9a1d-4a658cfba499",
      //       "email_verified": true,
      //       "email": "hornik.marian@gmail.com"
      //   }
      // }
      // get the access token of the signed in user
      const { accessToken } = await Auth.currentSession();
      // get the tenant from the top of the cognito groups list
      const cognitogroups = accessToken.payload["cognito:groups"];
      // each company is formed from "company:" + real_comapny_name, e.g "company:IBM"
      const tenant = cognitogroups.find((element) =>
        element.startsWith("company:")
      );
      // load all group's IdentityIDs (all having same tenant)
      const groupUserIDs = await API.graphql(
        graphqlOperation(listUserIdentitys),
        {}
      );
      // check if my identiy already exists
      const groupIdentityIDs = groupUserIDs.data.listUserIdentitys.items.map(
        (item) => {
          return item.identityID;
        }
      );

      setUserData((prevState) => ({
        ...prevState,
        username: userInfo.username,
        myIdentityId: userInfo.id,
        groupIdentityIds: groupIdentityIDs,
        tenant: tenant,
        myGroups: cognitogroups,
      }));
      // check if my IdentityID is already in DB, if not, enter it
      registerMyIdentityId(userInfo.id, groupIdentityIDs, tenant);
    };
    fetchUserIdentity();
  }, []);


  const registerMyIdentityId = async (
    myUserIdentityId,
    groupIdentityIDs,
    tenant
  ) => {
    // check if my identiy already exists in the DB
    if (groupIdentityIDs.indexOf(myUserIdentityId) === -1) {
      // if it doesnt, enter it into the db
      console.log("add user to db");
      const user = {
        tenant: tenant,
        identityID: myUserIdentityId,
      };

      try {
        await API.graphql(
          graphqlOperation(createUserIdentity, { input: user })
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="App">
      <AmplifySignOut />
      <header className="App-header">
        <h3>
          Logged in user: <b>{userData ? userData.username : "Loading..."}</b>
        </h3>
        {/* render only if userIdentity & userSession not empty  */}
        {userData ? <BigImage userData={userData} /> : <h3>Loading...</h3>}
        {/* {userData ? <ListDbImages userData={userData} /> : <h3>Loading...</h3>} */}
        {/* {userData ? <UploadImage userData={userData} /> : <h3>Loading...</h3>} */}
        {/* {userData ? <ListAllImages userData={userData} /> : <h3>Loading...</h3>} */}
        {/* <ShowMyImages /> */}
      </header>
    </div>
  );
}

export default withAuthenticator(App);
