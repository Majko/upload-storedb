import { useState, useEffect } from "react";
import Amplify from "aws-amplify";
import { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import UploadImage from "./Components/UploadImage";
import ListAllImages from "./Components/ListAllImages";
import ListDbImages from "./Components/ListDbImages";
import ShowMyImages from "./Components/ShowMyImages";
import MultiPageImage from "./Components/MultiPageImage";


import useFetchUserIdentity from "./useFetchUserIdentity"
import useRegisterMyIdentityID from "./useRegisterMyIdentityID";

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

function App() {

  const [userData, setUserData] = useState({});
  // fetch all necessary user data 
  const {
    username,
    myIdentityId,
    groupIdentityIds ,
    tenant,
    myGroups,
  } = useFetchUserIdentity()
  // Make sure my ID is registered in DB
  useRegisterMyIdentityID(userData.myIdentityId,userData.groupIdentityIds, userData.tenant )
  
  useEffect(()=>{
    setUserData({
      username,
      myIdentityId,
      groupIdentityIds ,
      tenant,
      myGroups,
    })
  },[
    username,
    myIdentityId,
    groupIdentityIds ,
    tenant,
    myGroups,
  ])

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
      </header>
    </div>
  );
}

export default withAuthenticator(App);
