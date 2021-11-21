import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Route, Switch } from "react-router";
import { useHistory } from "react-router-dom";

import { Auth } from "aws-amplify";
import AppMenu from "./AppMenu";
import { createContext, useEffect, useState } from "react";

import useFetchUserIdentity from "./useFetchUserIdentity";
import useRegisterMyIdentityID from "./useRegisterMyIdentityID";

export const UserContext = createContext();

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

const MainApp = ({ routesConfig }) => {
  const classes = useStyles();
  const [userData, setUserData] = useState({});
  let history = useHistory();

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
      setUserData({ username: null });
      // reload the page
      history.go(0);
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  return (
    <>
      {/* MainApp provides context for all children
        THe children will have to call  const user = useContext(UserContext);
        in order to get all user relevant data (in value below) */}
      <UserContext.Provider
        value={userData}
      >
        <Container maxWidth="xl">
          <AppMenu
            signedOut={signedOut}
            routesConfig={routesConfig}
            title="Ucto.online"
            className={classes.menu}
          />
          <Switch>
            {userData.username &&
              routesConfig.map((route) => (
                <Route
                  key={route.route}
                  path={route.route}
                  exact
                  component={route.component}
                />
              ))}
          </Switch>
        </Container>
      </UserContext.Provider>
    </>
  );
};

export default MainApp;
