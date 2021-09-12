import {
  ButtonBase,
  Divider,
  Container,
  Grid,
  Avatar,
  makeStyles,
} from "@material-ui/core";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import { Assignment } from "@material-ui/icons";
import { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import DocListItemFullDialog from "./DocListItemFullDialog";

const useStyles = makeStyles((theme) => ({
  avatar: {
    padding: 2,
    margin: 3,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

const DocListItem = ({ children, item, avatarname, details }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState(false);
  const Element = details; //element v ktorom je dtail biew

  const openDetail = (item) => {
    console.log("Clicked: ", item.name);
    setDetail(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div className={classes.item}>
      <Container maxWidth="lg">
        <ButtonBase onClick={() => handleClickOpen(item)}>
          <Grid container>
            <Grid item xs={2}>
              <Avatar className={`${classes.purple} ${classes.avatar}`}>
                {avatarname ? avatarname : <Assignment />}
              </Avatar>
            </Grid>
            <Grid item xs={10}>
              {children}
            </Grid>
          </Grid>
        </ButtonBase>
        <Divider />
      </Container>

      <DocListItemFullDialog open={open} setOpen={setOpen} details={details} />

      {/* <Dialog
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
      </Dialog> */}

    </div>
  );
};

export default DocListItem;
