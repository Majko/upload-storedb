import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import UploadImage from "./UploadImage";
import ListAllImages from "./ListAllImages";
import ListDbImages from "./ListDbImages";
import ShowMyImages from "./ShowMyImages";
import ListMyImages from "./ListMyImages";
import MultiPageImage from "./MultiPageImage";

function AppMenu({ userData }) {
  return (
    <Router>
      <RouterApp userData={userData} />
    </Router>
  );
}
export default AppMenu;

// potrebne oddelit aby sa nastavil Route conext => inak nefunguje useHistory
const RouterApp = ({ userData }) => {
  let history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleRouting = (route) => {
    console.log(route);
    history.push(route);
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems=[
    { label: "Upload image", route: "/upload" },
    { label: "DB List", route: "/listdb" },
    { label: "Multipage picture", route: "/multipage" },
    { label: "Show whole groups Images", route: "/showallimgs" },
    { label: "Show my Images", route: "/showmyimgs" },
    { label: "List my Images", route: "/listmyimgs" },
  ]

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems.map((item, index)=>{
          return <MenuItem onClick={()=>handleRouting(item.route)} key={index}>{item.label}</MenuItem>
        })}

      </Menu>
 
      <Switch>
        <Route path="/upload">
          {userData ? <UploadImage userData={userData} /> : <h3>Loading...</h3>}
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
    </div>
  );
};
