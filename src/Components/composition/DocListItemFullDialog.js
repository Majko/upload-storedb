import { makeStyles } from "@material-ui/core";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({}));

const DocListItemFullDialog = ({ details, open, setOpen }) => {
  const classes = useStyles();
  // const [open, setOpen] = useState(false);
  // const [detail, setDetail] = useState(false);
  const Element = details; //element v ktorom je dtail biew

  //   const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  return (
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
        <Element />
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
  );
};

export default DocListItemFullDialog;
