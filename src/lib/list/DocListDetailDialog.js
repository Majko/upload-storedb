import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { DetailDialogContext } from "./DocList";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Close } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

export const ModifyActiveContext = createContext();

const useStyles = makeStyles(() => ({
  dialogTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  update: {
    position: "fixed",
    top: 250,
    right: "5%",
  },
}));

/**
 * @description Component which children will form the  Content for Dialog when clicking one of the short items
 * const {detailDialogOpen, setDetailDialogOpen, detailDialogItem, setDetailDialogItem } = useContext(DetailDialogContext);
 * in order to reach the state of the dialog as weel as method used to open/close the dialog
 * @param {Object} children - all children
 * @returns Component
 */
const DocListDetailDialog = ({ children }) => {
  const [modifyActive, setModifyActive] = useState(false);

  const {
    detailDialogOpen,
    setDetailDialogOpen,
    detailDialogItem,
  } = useContext(DetailDialogContext);

  useEffect(() => {
    if (detailDialogOpen === false)
      // Set to false, so that always after dialog opening the first view is
      // view and not modify.
      // We need to  wrap to timeout to prevent short flashig of Viem comeponent
      setTimeout(() => {
        setModifyActive(false);
      }, 1000);
  }, [detailDialogOpen]);

  const classes = useStyles();

  const handleClose = () => {
    setDetailDialogOpen(false);
  };

  const toggleModify = () => {
    setModifyActive(!modifyActive);
  };

  return (
    <div>
      <ModifyActiveContext.Provider value={modifyActive}>
        <Dialog
          fullScreen
          open={detailDialogOpen}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle disableTypography className={classes.dialogTitle}>
            Detailny pohlad na dokument
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {/* Children with injected item */}
              {React.Children.map(children, (child) =>
                React.cloneElement(child, {
                  item: detailDialogItem,
                })
              )}
            </DialogContentText>
            <Avatar className={classes.update} onClick={() => toggleModify()}>
              <ArrowForwardIosIcon />
            </Avatar>
          </DialogContent>
        </Dialog>
      </ModifyActiveContext.Provider>
    </div>
  );
};

export default DocListDetailDialog;
