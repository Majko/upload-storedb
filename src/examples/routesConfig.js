import UploadImage from "../examples/Components/UploadImage";
import ListAllImages from "../examples/Components/ListAllImages";
import ListDbImages from "../examples/Components/ListDbImages";
import ShowMyImages from "../examples/Components/ShowMyImages";
import ListMyImages from "../examples/Components/ListMyImages";
import MultiPageImage from "../examples/Components/MultiPageImage";
import TestDocsList from "../examples/Components/new/TestDocsList";
import CompositeList from "./compositelist/CompositeList";
import InvoiceIssuedList from "./invoiceIssued/InvoiceIssuedList";
import PartnerList from "./partners/partnersList";
import Home from "../lib/home/Home";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

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
  {
    label: "Issued invoices",
    route: "/invoiceIssuedList",
    component: InvoiceIssuedList,
    icon: MailIcon,
  },
  {
    label: "Partners",
    route: "/PartnesList",
    component: PartnerList,
    icon: MailIcon,
  },
];
