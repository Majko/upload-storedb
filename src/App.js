import { useState, useEffect } from "react";
import AppMenu from "./Components/AppMenu";

import Amplify from "aws-amplify";
import { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

import useFetchUserIdentity from "./useFetchUserIdentity";
import useRegisterMyIdentityID from "./useRegisterMyIdentityID";

import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

function App() {
  const [userData, setUserData] = useState({});
  // fetch all necessary user data
  const {
    username,
    myIdentityId,
    groupIdentityIds,
    tenant,
    myGroups,
  } = useFetchUserIdentity();
  // Make sure my ID is registered in DB
  useRegisterMyIdentityID(
    userData.myIdentityId,
    userData.groupIdentityIds,
    userData.tenant
  );

  useEffect(() => {
    setUserData({
      username,
      myIdentityId,
      groupIdentityIds,
      tenant,
      myGroups,
    });
  }, [username, myIdentityId, groupIdentityIds, tenant, myGroups]);

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Typography variant="body2">
            Logged in user:{" "}
            <b>
              {userData ? userData.username : "Loading..."} ({userData.tenant})
            </b>
          </Typography>
          <AmplifySignOut />
          <AppMenu userData={userData} />
        </Container>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
