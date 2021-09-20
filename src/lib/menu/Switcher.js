import UploadImage from "../../Components/UploadImage";
import ListAllImages from "../../Components/ListAllImages";
import ListDbImages from "../../Components/ListDbImages";
import ShowMyImages from "../../Components/ShowMyImages";
import ListMyImages from "../../Components/ListMyImages";
import MultiPageImage from "../../Components/MultiPageImage";
import TestDocsList from "../../Components/new/TestDocsList";
import CompositeList from "../list/CompositeList";

import { BrowserRouter as Switch, Route } from "react-router-dom";

import { menuItems } from "./menuitems";

const Switcher = ({ userData }) => {
  return (
    <Switch>
      {userData && menuItems.map((route) => (
        <Route
          key={route.route}
          path={route.route}
          exact
          component={route.component}
        />
      ))}
    </Switch>
  );

  // return (
  //   <Switch>
  //     <Route path="/upload">
  //       {userData ? <UploadImage userData={userData} /> : <h3>Loading...</h3>}
  //     </Route>
  //     <Route path="/listdb">
  //       {userData ? <ListDbImages userData={userData} /> : <h3>Loading...</h3>}
  //     </Route>
  //     <Route path="/multipage">
  //       {userData ? (
  //         <MultiPageImage userData={userData} />
  //       ) : (
  //         <h3>Loading...</h3>
  //       )}
  //     </Route>
  //     <Route path="/showallimgs">
  //       {userData ? <ListAllImages userData={userData} /> : <h3>Loading...</h3>}
  //     </Route>
  //     <Route path="/showmyimgs">
  //       <ShowMyImages />
  //     </Route>
  //     <Route path="/listmyimgs">
  //       <ListMyImages />
  //     </Route>
  //     <Route path="/newlist">
  //       <TestDocsList />
  //     </Route>
  //     <Route path="/compositelist">
  //       <CompositeList />
  //     </Route>
  //   </Switch>
  // );
};

export default Switcher;
