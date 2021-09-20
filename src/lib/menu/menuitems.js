import UploadImage from "../../Components/UploadImage";
import ListAllImages from "../../Components/ListAllImages";
import ListDbImages from "../../Components/ListDbImages";
import ShowMyImages from "../../Components/ShowMyImages";
import ListMyImages from "../../Components/ListMyImages";
import MultiPageImage from "../../Components/MultiPageImage";
import TestDocsList from "../../Components/new/TestDocsList";
import CompositeList from "../list/CompositeList";

import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

// export const menuItems = [
//   { label: "Upload image", route: "/upload" , component: UploadImage },
//   { label: "DB List", route: "/listdb", component:  ListDbImages },
//   { label: "Multipage picture", route: "/multipage", component:  MultiPageImage },
//   { label: "Show whole groups Images", route: "/showallimgs" , component:  ListAllImages},
//   { label: "Show my Images", route: "/showmyimgs", component:  ShowMyImages },
//   { label: "List my Images", route: "/listmyimgs" , component: ListMyImages },
//   { label: "Test list", route: "/newlist" , component: TestDocsList },
//   { label: "Composite list", route: "/compositelist" , component: CompositeList },
// ];

export const menuItems = [
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
