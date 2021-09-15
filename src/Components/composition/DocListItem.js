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

const useStyles = makeStyles((theme) => ({
  avatar: {
    padding: 1,
    margin: 10,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  item: {
    padding: 3,
  },
}));

// const DocListItem = ({ children, item, avatarname, detailcomponent }) => {
const DocListItem = ({ children, avatarname, detail }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    console.log("click open");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.item}>
      {/* this part is only used for long description */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          {detail}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
      {/* this part is only used for short description */}
      <Container maxWidth="lg">
        <ButtonBase onClick={handleClickOpen}>
          <Grid container>
            <Grid item xs={2} >
              <Avatar className={`${classes.purple} ${classes.avatar}`}>
                {avatarname ? avatarname : <Assignment />}
              </Avatar>
            </Grid>
            <Grid item xs={10} className={classes.item}>
              {children}
            </Grid>
          </Grid>
        </ButtonBase>
        <Divider />
      </Container>
    </div>
  );
};

export default DocListItem;
