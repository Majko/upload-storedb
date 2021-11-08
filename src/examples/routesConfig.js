import UploadImage from "../examples/Components/UploadImage";
import ListAllImages from "../examples/Components/ListAllImages";
import ListDbImages from "../examples/Components/ListDbImages";
import ShowMyImages from "../examples/Components/ShowMyImages";
import ListMyImages from "../examples/Components/ListMyImages";
import MultiPageImage from "../examples/Components/MultiPageImage";
import TestDocsList from "../examples/Components/new/TestDocsList";
import CompositeList from "./compositelist/CompositeList";
import Home from "../lib/home/Home";

import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

export const routesConfig = [
  {
    label: "Home",
    route: "/",
    component: Home,
    icon: MailIcon,
  },
  {
    label: "Upload image",
    route: "/upload",
    component: UploadImage,
    icon: MailIcon,
  },
  {
    label: "DB List",
    route: "/listdb",
    component: ListDbImages,
    icon: MailIcon,
  },
  {
    label: "Multipage picture",
    route: "/multipage",
    component: MultiPageImage,
    icon: MailIcon,
  },
  {
    label: "Show whole groups Images",
    route: "/showallimgs",
    component: ListAllImages,
    icon: MailIcon,
  },
  {
    label: "Show my Images",
    route: "/showmyimgs",
    component: ShowMyImages,
    icon: InboxIcon,
  },
  {
    label: "List my Images",
    route: "/listmyimgs",
    component: ListMyImages,
    icon: InboxIcon,
  },
  {
    label: "Test list",
    route: "/newlist",
    component: TestDocsList,
    icon: InboxIcon,
  },
  {
    label: "Composite list",
    route: "/compositelist",
    component: CompositeList,
    icon: InboxIcon,
  },
];
