import { useHistory } from "react-router-dom";
import { Fragment, useContext, useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import { blue, red } from "@material-ui/core/colors";
import { UserContext } from "./MainApp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logininfo: {
    padding: 10,
    right: 0,
    width: 150,
  },
  amplifySignIn: {
    backgroundColor: red[400],
    color: blue[500],
  },
}));

function AppMenu({ signedOut, routesConfig, title }) {
  let history = useHistory();
  const [drawerState, setDrawerState] = useState(false);
  const classes = useStyles();

  const handleRouting = (route) => {
    history.push(route);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerState(open);
  };

  const handleRedirect =()=>{
    return (
      history.go(0)
    )
  }

    //ziskaj user context
    const user = useContext(UserContext);
    console.log("User data:", user);

  // menuItems is imported from external file
  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {routesConfig.map((item, index) => {
          let MyIcon = item.icon;
          return (
            <ListItem
              button
              key={item.label}
              onClick={() => handleRouting(item.route)}
            >
              <ListItemIcon>
                <MyIcon />
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          );
        })}
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} onClick={handleRedirect}>
            {title}
          </Typography>
          {/* <AmplifySignOut className={classes.signout}>"Odhlas sa"</AmplifySignOut> */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={signedOut}
            className={classes.menuButton}
          >
            <ExitToAppIcon />
          </IconButton>
          <Fragment key="left">
            <Drawer
              anchor="left"
              open={drawerState}
              onClose={toggleDrawer(false)}
            >
              <Typography variant="body2" className={classes.logininfo}>
                User:{" "}
                <b>
                  {user.tenant
                    ? user.username +
                      " (" +
                      user.tenant.substring(8) +
                      ")"
                    : "Loading..."}
                </b>
              </Typography>
              <Divider />
              {list()}
            </Drawer>
          </Fragment>
        </Toolbar>
      </AppBar>
      {/* aby sme mali spravne formatovanie prida prazdny toolbar */}
      <Toolbar />
    </div>
  );
}
export default AppMenu;
