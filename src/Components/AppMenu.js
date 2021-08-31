import {
  useHistory,
} from "react-router-dom";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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
}));

function AppMenu({ userData }) {
  return (
    <>
      <RouterApp userData={userData} />
    </>
  );
}
export default AppMenu;

// potrebne oddelit aby sa nastavil Route conext => inak nefunguje useHistory
const RouterApp = ({ userData }) => {
  let history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleRouting = (route) => {
    console.log(route);
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
          <IconButton aria-label="menu" onClick={handleClick}>
            <MenuIcon color="secondary" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
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
};
