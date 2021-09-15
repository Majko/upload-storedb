import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Fab, makeStyles } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: 0,
    top: "auto",
    right: theme.spacing(2),
    bottom: theme.spacing(2),
    left: "auto",
    position: "fixed",
  },
}));

const DocListAddDialog = ({ children , setDialogOpen , dialogOpen}) => {
  const classes = useStyles();

  const handleClickOpen = () => {
    setDialogOpen(true)
  };

  const handleClose = () => {
    setDialogOpen(false)
  };

  return (
    <div>
      <Fab
        onClick={handleClickOpen}
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
        open={dialogOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Novy dokument</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Prosm vlozte vsetky hodnoty, minimalne tie , ktore su oznacene
            hviezdickou
          </DialogContentText>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Zrus
          </Button>
          <Button onClick={handleClose} color="primary">
            Odosli
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DocListAddDialog;
