import VisDocument from "../../lib/visualize/VisDocument";

import Card from "@material-ui/core/Card";
import { CardHeader, IconButton } from "@material-ui/core";
import { DeleteOutlined , ArrowBack} from "@material-ui/icons";
import PageviewIcon from "@material-ui/icons/Pageview";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { Fragment, useState } from "react";
import { useFetchFile } from "../../lib/aws/useFetchFile";

import DbFileCardContent from "./DbFileCardContent";


/**
 * @description Component uploading file to AWS
 * @param {Object} props userData - data needed to identification, here we need: tenant, IdentityID
 * @returns
 */
function DbFileCard({ file, handleRemove , setFile}) {
  const [fileselection, setFileselection] = useState(null);
  const [drawerState, setDrawerState] = useState(false);

  const { fetchFile } = useFetchFile();

  const showImage = async (file) => {
    const { signedUrl, key } = await fetchFile(
      file.file.identityID,
      file.file.key
    );
    setFileselection({ signedUrl, key });
    console.log(file);
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

  const removeFileAndReturnBack =(key, id) =>{
    handleRemove(key, id)
    setFile(null) // needed toget back to previous screen
  }

  const menuItems = [
    {
      label: "Prezri",
      called: showImage,
      args: [file],
      icon: <PageviewIcon />,
    },
    {
      label: "Vymaž",
      called: removeFileAndReturnBack,
      args: [file.file.key, file.id],
      icon: <DeleteOutlined />,
    },
    {
      label: "Vrat sa spat",
      called: setFile,
      args: [null],
      icon: <ArrowBack />,
    },
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
            onClick={() => item.called(...item.args)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const anchor = "bottom";

  return (
    <Card>
      <CardHeader
        action={
          <>
            <IconButton onClick={toggleDrawer(true)}>
              <MoreVertIcon />
            </IconButton>
          </>
        }
        title={file.name}
      />
      {fileselection && (
        <VisDocument
          fileName={fileselection.key}
          fileUrl={fileselection.signedUrl}
        />
      )}
      <DbFileCardContent file={file} />
      <Fragment key={anchor}>
        <Drawer
          anchor={anchor}
          open={drawerState}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
      </Fragment>
    </Card>
  );
}

export default DbFileCard;
