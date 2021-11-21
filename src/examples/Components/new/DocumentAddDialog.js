import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { makeStyles } from "@mui/styles";
import { Fab } from "@mui/material";
import { Add } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: 0,
    top: "auto",
    right: 5,
    bottom: 5,
    left: "auto",
    position: "fixed",
  },
}));

export default function DocumentAddDialog({ children }) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        open={open}
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
}
