import { useHistory } from "react-router-dom";
import { useState } from "react";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";

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
}));

function AppMenu({ userData, signedOut }) {
  let history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleRouting = (route) => {
    history.push(route);
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: "Upload image", route: "/upload" },
    { label: "DB List", route: "/listdb" },
    { label: "Multipage picture", route: "/multipage" },
    { label: "Show whole groups Images", route: "/showallimgs" },
    { label: "Show my Images", route: "/showmyimgs" },
    { label: "List my Images", route: "/listmyimgs" },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            aria-label="menu"
            onClick={handleClick}
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
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {menuItems.map((item, index) => {
              return (
                <MenuItem onClick={() => handleRouting(item.route)} key={index}>
                  {item.label}
                </MenuItem>
              );
            })}
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default AppMenu;

