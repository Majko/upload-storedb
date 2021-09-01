import { useState, useEffect } from "react";
import AppMenu from "./Components/AppMenu";
import UploadImage from "./Components/UploadImage";
import ListAllImages from "./Components/ListAllImages";
import ListDbImages from "./Components/ListDbImages";
import ShowMyImages from "./Components/ShowMyImages";
import ListMyImages from "./Components/ListMyImages";
import MultiPageImage from "./Components/MultiPageImage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Amplify from "aws-amplify";
import { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

import useFetchUserIdentity from "./useFetchUserIdentity";
import useRegisterMyIdentityID from "./useRegisterMyIdentityID";

import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

const useStyles = makeStyles({
  menu: {
    position: "absolute",
    right: "100%",
    width: 100,
    height: 120,
  },
  footer: {
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
});

function App() {
  const [userData, setUserData] = useState({});
  const classes = useStyles();

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


  

  const signedOut = async () => {
    try {
      await Auth.signOut();
    setUserData(null)
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Router>
            <AppMenu userData={userData} signedOut={signedOut} className={classes.menu} />
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
              <Route path="/listmyimgs">
                <ListMyImages />
              </Route>
            </Switch>
          </Router>
        </Container>
      </header>
      <div className={classes.footer}>
        {/* <AmplifySignOut /> */}
      </div>
    </div>
  );
}

export default withAuthenticator(App);
