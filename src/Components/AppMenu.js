import { useHistory } from "react-router-dom";
import { Fragment, useState } from "react";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

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
    { label: "Upload image", route: "/upload" },
    { label: "DB List", route: "/listdb" },
    { label: "Multipage picture", route: "/multipage" },
    { label: "Show whole groups Images", route: "/showallimgs" },
    { label: "Show my Images", route: "/showmyimgs" },
    { label: "List my Images", route: "/listmyimgs" },
  ];

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={item.label} onClick={()=>handleRouting(item.route)}>
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
      <AppBar position="static">
        <Toolbar>
          <IconButton
            aria-label="menu"
            onClick={toggleDrawer(true)}
            // onClick={handleClick}
            className={classes.menuButton}
          >
            <MenuIcon color="secondary" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Ucto.online
          </Typography>
          <Typography variant="body2" className={classes.logininfo}>
            User:
            <b>
              {userData.tenant
                ? userData.username + "(" + userData.tenant.substring(8) + ")"
                : "Loading..."}
            </b>
          </Typography>
          <Button onClick={signedOut} color="inherit">
            Odhlás sa
          </Button>
          <Fragment key="left">
            <Drawer
              anchor="left"
              open={drawerState}
              onClose={toggleDrawer(false)}
            >
              {list()}
            </Drawer>
          </Fragment>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default AppMenu;
