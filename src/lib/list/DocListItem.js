import { makeStyles } from "@mui/styles";
import { Card, CardContent, ButtonBase } from "@mui/material";
import React, { useContext } from "react";

import { DetailDialogContext } from "./DocList";
import { orange } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  item: {
    padding: 2,
  },
  buttonbase: {
    width: "100%",
    textAlign: "left",
  },
  avatar: {
    backgroundColor: orange[300],
    height: 56,
    width: 56,
  },
}));

/**
 * @description A component of a DOcList item oth avatar and free space fpor a short Item description
 * It will provide space for short description af an item within a DocList
 * @param {Object} children All components children
 * @param {String} avatarname A name we want to use for the avatar, first 2 leeters will be presented within the avatar
 * @param {Object} item A database Item we want to show
 * @returns Component
 */
const DocListItem = ({ children, item }) => {
  const classes = useStyles();
  const { setDetailDialogOpen, setDetailDialogItem } = useContext(
    DetailDialogContext
  );

  const handleClickOpen = () => {
    setDetailDialogOpen(true);
    setDetailDialogItem(item);
  };

  return (
    <div className={classes.item}>
      <Card>
        <CardContent>
          <ButtonBase
            className={classes.buttonbase}
            onClick={() => handleClickOpen()}
          >
            {/* Children with injected item */}
            {React.Children.map(children, (child) =>
              React.cloneElement(child, {
                item: item,
              })
            )}
          </ButtonBase>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocListItem;
