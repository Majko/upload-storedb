import { useState, useEffect } from "react";
import Amplify from "aws-amplify";
import { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import UploadImage from "./Components/UploadImage";
import ListAllImages from "./Components/ListAllImages";
import ListDbImages from "./Components/ListDbImages";
import ShowMyImages from "./Components/ShowMyImages";

import { API, graphqlOperation } from "aws-amplify";
import { listUserIdentitys } from "./graphql/queries";
import { createUserIdentity } from "./graphql/mutations";
import MultiPageImage from "./Components/MultiPageImage";
import useFetchUserIdentity from "./useFetchUserIdentity"

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

function App() {

  const [userData, setUserData] = useState({});
  const [error, setError] = useState(null);
  const ret = useFetchUserIdentity()
  
  useEffect(()=>{
    setUserData(ret[0])
    setError(ret[1])
  },[ret])

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
        {userData ? <MultiPageImage userData={userData} /> : <h3>Loading...</h3>}
        {userData ? <ListDbImages userData={userData} /> : <h3>Loading...</h3>}
        {userData ? <UploadImage userData={userData} /> : <h3>Loading...</h3>}
        {userData ? <ListAllImages userData={userData} /> : <h3>Loading...</h3>}
        <ShowMyImages />
        {error && <h1>{error}</h1>}
      </header>
    </div>
  );
}

export default withAuthenticator(App);
