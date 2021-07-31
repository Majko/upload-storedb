import { useState, useEffect } from "react";
import Amplify from "aws-amplify";
import { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import UploadImage from "./Components/UploadImage";
import ListAllImages from "./Components/ListAllImages";
import ShowMyImages from "./Components/ShowMyImages";

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
  const [userData, setUserData] = useState(userDataDetail);

  const registerMyIdentityId = async (myUserIdentityId, tenant) => {
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
      groupIdentityIds: groupIdentityIDs,
    }));
    //my ID not in the array
    if (groupIdentityIDs.indexOf(myUserIdentityId) === -1) {
      // if it doesnt, enter it into the db
      console.log("add userto db");
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

  useEffect(() => {
    // set the user attributes to state variable userIdentity
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
      // setUserIdentity(userInfo);
      // get the access token of the signed in user
      const { accessToken } = await Auth.currentSession();
      // get the tenant from the top of the cognito groups list
      const cognitogroups = accessToken.payload["cognito:groups"];
      // each company is formed from "company:" + real_comapny_name, e.g "company:IBM"
      const tenant = cognitogroups.find((element) =>
      element.startsWith("company:")
      );
      if (tenant === undefined) {
        console.log("Tenant is undefined!!!");
        // return;
      } else console.log("Tenant is: ", tenant);
      // setUserSession(accessToken);
      setUserData((prevState) => ({
        ...prevState,
        username: userInfo.username,
        myIdentityId:userInfo.id,
        tenant:tenant,
      }));
      registerMyIdentityId(userInfo.id, tenant);
    };
    fetchUserIdentity();
    console.log(userData);
  }, []);

  return (
    <div className="App">
      <AmplifySignOut />
      <header className="App-header">
        <h3>
          Logged in user: <b>{userData ? userData.username : "Loading..."}</b>
        </h3>
        {/* render only if userIdentity & userSession not empty  */}
        {userData ? (
          <UploadImage userData={userData}/>
        ) : (
          <h3>Loading...</h3>
        )}
        {userData? (
          <ListAllImages userData={userData} />
        ) : (
          <h3>Loading...</h3>
        )}
        <ShowMyImages />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
