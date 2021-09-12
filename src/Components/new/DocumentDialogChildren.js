import TextField from "@material-ui/core/TextField";
import {  makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      padding: 5,
      position: "relative",
    },
    fab: {
      margin: 0,
      top: "auto",
      right: theme.spacing(2),
      bottom: theme.spacing(2),
      left: "auto",
      position: "fixed",
    },
    textfield: {
      padding: 10,
    },
  }));
  
const DocumentDialogChildren = () => {
    const classes = useStyles()
  return (
    <>
      <TextField
        className={classes.textfield}
        autoFocus
        margin="dense"
        id="name"
        label="Amount"
        type="text"
        autoComplete="disable"
        variant="standard"
      />
      <TextField
        className={classes.textfield}
        margin="dense"
        id="name"
        label="VAT"
        type="text"
        autoComplete="disable"
      />
      <TextField
        className={classes.textfield}
        margin="dense"
        id="name"
        label="Popis"
        type="text"
      />
    </>
  );
};

export default DocumentDialogChildren