import { useState, useEffect } from "react";
import AppMenu  from "./Components/AppMenu";

import Amplify from "aws-amplify";
import { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

import useFetchUserIdentity from "./useFetchUserIdentity";
import useRegisterMyIdentityID from "./useRegisterMyIdentityID";

import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";

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

  const engine = new Styletron();


  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <div className="App">
          <AmplifySignOut />
          <header className="App-header">
            <div>
              Logged in user:{" "}
              <b>
                {userData ? userData.username : "Loading..."} from :
                {userData.tenant}
              </b>
            </div>
            <AppMenu userData={userData}/>
          </header>
        </div>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default withAuthenticator(App);
