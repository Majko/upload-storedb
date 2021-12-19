import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Route, Switch } from "react-router";
import { useHistory } from "react-router-dom";

import { Auth, API, graphqlOperation } from "aws-amplify";
import AppMenu from "./AppMenu";
import { createContext, useEffect, useState } from "react";

import useRegisterMyIdentityID from "./useRegisterMyIdentityID";
import { listUserIdentitys } from "../../graphql/queries";

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

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    const userInfo = await Auth.currentUserInfo();
    console.log('User token: ', userInfo);
    const { accessToken } = await Auth.currentSession();
    console.log('Access token: ', accessToken);
    const cognitogroups = accessToken.payload["cognito:groups"];
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
    setUserData({
      username: userInfo.username,
      myIdentityId: userInfo.id,
      groupIdentityIds: groupIdentityIDs,
      tenant: tenant,
      myGroups: cognitogroups,
    });
  };
  // TODO
  // uloz moje data do localstore , urcit logiku

  // Make sure my ID is registered in DB (regiser me if I am not yet registered)
  useRegisterMyIdentityID(
    userData.myIdentityId,
    userData.groupIdentityIds,
    userData.tenant
  );

  const signedOut = async () => {
    try {
      await Auth.signOut();
      setUserData(null);
      // reload the page
      history.go(0);
      history.push('/')
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  return (
    <>
      {/* MainApp provides context for all children
        THe children will have to call  const user = useContext(UserContext);
        in order to get all user relevant data (in value below) */}
      <UserContext.Provider value={userData}>
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
