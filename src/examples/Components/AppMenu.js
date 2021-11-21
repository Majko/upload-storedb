import { useHistory } from "react-router-dom";
import { Fragment, useState } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

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
    padding:10,
    right: 0,
    width: 150,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

function AppMenu({ userData, signedOut }) {
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

  const menuItems = [
    { label: "Home", route: "/home" },
    { label: "Upload image", route: "/upload" },
    { label: "DB List", route: "/listdb" },
    { label: "Multipage picture", route: "/multipage" },
    { label: "Show whole groups Images", route: "/showallimgs" },
    { label: "Show my Images", route: "/showmyimgs" },
    { label: "List my Images", route: "/listmyimgs" },
    { label: "Test list", route: "/newlist" },
    { label: "Composite list", route: "/compositelist" },
  ];

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={item.label}
            onClick={() => handleRouting(item.route)}
          >
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
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
            size="large">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Ucto.online
          </Typography>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={signedOut}
            className={classes.menuButton}
            size="large">
            <ExitToAppIcon />
          </IconButton>
          <Fragment key="left">
            <Drawer
              anchor="left"
              open={drawerState}
              onClose={toggleDrawer(false)}
            >
              <Typography variant="body2" className={classes.logininfo}>
                User:  {" "}
                <b>
                  {userData.tenant
                    ? userData.username +
                      " (" +
                      userData.tenant.substring(8) +
                      ")"
                    : "Loading..."}
                </b>
              </Typography>
              <Divider/>
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
