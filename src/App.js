import { useState, useEffect } from "react";
import Amplify from "aws-amplify";
import {Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
// import { API, graphqlOperation } from "aws-amplify";
// import * as subscriptions from "./graphql/subscriptions";
import UploadImage from "./Components/UploadImage";
import ListAllImages from "./Components/ListAllImages"
import ShowMyImages from "./Components/ShowMyImages"

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

function App() {
  const [userIdentity, setUserIdentity] = useState(null);
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

  useEffect(() => {
    // set the user attributes to state variable userIdentity
    const fetchUserIdentity = async () => {
      const userInfo = await Auth.currentUserInfo()
      setUserIdentity(userInfo)
      // console.log(userInfo);
    };
    fetchUserIdentity();
  }, []);

  return (
    <div className="App">
      <AmplifySignOut />
      <header className="App-header">
        {/* render only if userIdentity not empty  */}
        {userIdentity && <UploadImage userIdentity={userIdentity} />}
        {userIdentity && <ListAllImages userIdentity={userIdentity} /> }
        {/* <ShowMyImages  /> */}
      </header>
    </div>
  );
}

export default withAuthenticator(App);
