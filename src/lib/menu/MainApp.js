import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Route, Switch } from "react-router";
import { useHistory } from "react-router-dom";

import { Auth, Hub, API, graphqlOperation } from "aws-amplify";
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
    // Hub.listen("auth", async (data) => {
    //   console.log("Auth event: ", data.payload.event);
    //   switch (data.payload.event) {
    //     case "configured":
    //       accessToken = await Auth.Auth.currentSession();
    //       console.log('AccessToken: ', accessToken);
    //       break;
    //     case "auth":
    //       accessToken = data.payload.data.signInUserSession.accessToken;
    //       console.log('AccessToken: ', accessToken);
    //       break;
    //     default:
    //       break;
    //   }

    //   const userInfo = await Auth.currentUserInfo();
    //   // console.log("authInfo:", accessToken);
    //   // console.log("userInfo:", userInfo);
    //   const cognitogroups = accessToken.payload["cognito:groups"];
    //   const tenant =
    //     cognitogroups &&
    //     cognitogroups.find((element) => element.startsWith("company:"));
    //   // load all group's IdentityIDs (all having same tenant)
    //   const groupUserIDs = await API.graphql(
    //     graphqlOperation(listUserIdentitys),
    //     {}
    //   );
    //   // check if my identiy already exists
    //   const groupIdentityIDs = groupUserIDs.data.listUserIdentitys.items.map(
    //     (item) => {
    //       return item.identityID;
    //     }
    //   );
    //   setUserData({
    //     username: userInfo.username,
    //     myIdentityId: userInfo.id,
    //     groupIdentityIds: groupIdentityIDs,
    //     tenant: tenant,
    //     myGroups: cognitogroups,
    //   });
    // });
  }, []);

  const loadUserData = async () => {
    const { accessToken } = await Auth.currentSession();
    const userInfo = await Auth.currentUserInfo();
    // console.log("authInfo:", accessToken);
    // console.log("userInfo:", userInfo);
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

  // Make sure my ID is registered in DB
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
