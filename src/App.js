import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Amplify from "aws-amplify";
import { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

import UploadImage from "./Components/UploadImage";
import ListAllImages from "./Components/ListAllImages";
import ListDbImages from "./Components/ListDbImages";
import ShowMyImages from "./Components/ShowMyImages";
import MultiPageImage from "./Components/MultiPageImage";

import useFetchUserIdentity from "./useFetchUserIdentity";
import useRegisterMyIdentityID from "./useRegisterMyIdentityID";

import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, styled } from "baseui";

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

              <Router>
                <div>
                  <nav>
                    <ul>
                      <li>
                        <Link to="/upload">Upload image</Link>
                      </li>
                      <li>
                        <Link to="/listdb">List DB Images</Link>
                      </li>
                      <li>
                        <Link to="/multipage">Multi Page Image</Link>
                      </li>
                      <li>
                        <Link to="/showallimgs">Show whole groups Images</Link>
                      </li>
                      <li>
                        <Link to="/showmyimgs">Show my Images</Link>
                      </li>
                    </ul>
                  </nav>

                  {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                  <Switch>
                    <Route path="/upload">
                      {userData ? (
                        <UploadImage userData={userData} />
                      ) : (
                        <h3>Loading...</h3>
                      )}
                    </Route>
                    <Route path="/listdb">
                      {userData ? (
                        <ListDbImages userData={userData} />
                      ) : (
                        <h3>Loading...</h3>
                      )}
                    </Route>
                    <Route path="/multipage">
                      {userData ? (
                        <MultiPageImage userData={userData} />
                      ) : (
                        <h3>Loading...</h3>
                      )}
                    </Route>
                    <Route path="/showallimgs">
                      {userData ? (
                        <ListAllImages userData={userData} />
                      ) : (
                        <h3>Loading...</h3>
                      )}
                    </Route>
                    <Route path="/showmyimgs">
                      <ShowMyImages />
                    </Route>
                  </Switch>
                </div>
              </Router>
            </header>
          </div>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default withAuthenticator(App);
