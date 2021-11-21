import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Fab, IconButton, makeStyles } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { AddDialogContext } from "./DocList";
import { useContext } from "react";
import { Close } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: 0,
    top: "auto",
    right: theme.spacing(2),
    bottom: theme.spacing(2),
    left: "auto",
    position: "fixed",
  },
  dialogTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

/**
 * @description Component adding "PLUS" icon to the list. Its children will form
 * the  Content for Dialog when clicking on Add icon
 * The children will use:  const { addDialogOpen, setAddDialogOpen } = useContext(AddDialogContext)
 * to reach the state of the dialog as weel as method used to open/close the dialog
 * @param {Object} children - all children
 * @returns Component
 */
const DocListAddDialog = ({ children }) => {
  const classes = useStyles();
  const { addDialogOpen, setAddDialogOpen } = useContext(AddDialogContext);

  const handleClickOpenAdd = () => {
    setAddDialogOpen(true);
  };

  const handleClose = () => {
    setAddDialogOpen(false);
  };

  return (
    <div>
      <Fab
        onClick={handleClickOpenAdd}
        color="primary"
        size="medium"
        component="span"
        aria-label="add"
        className={classes.fab}
      >
        <Add fontSize="medium" />
      </Fab>
      <Dialog
        fullScreen
        open={addDialogOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle disableTypography className={classes.dialogTitle}>
          Novy dokument
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Prosm vlozte vsetky hodnoty, minimalne tie , ktore su oznacene
            hviezdickou
          </DialogContentText>
          {children}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DocListAddDialog;
