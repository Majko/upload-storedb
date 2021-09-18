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
import { createContext, useState } from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

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
    color: theme.palette.getContrastText(deepPurple[200]),
    backgroundColor: deepPurple[300],
  },
  item: {
    padding: 1,
  },
  buttonbase: {
    width: "100%",
    textAlign: "left",
  },
}));

export const DetailDialogContext = createContext();

const DocListItem = ({ children, avatarname, detail }) => {
  const classes = useStyles();
  // THe children will have to call
  // const { detailDialogOpen, setDetailDialogOpen } = useContext(DetailDialogContext);
  // in order to be able to close the dialog and teh to call setDetailDialogOpen(false)
  const [detailDialogOpen, setDetailDialogOpen] = useState(false);

  const handleClickOpen = () => {
    setDetailDialogOpen(true);
  };

  const handleClose = () => {
    setDetailDialogOpen(false);
  };

  return (
    <div className={classes.item}>
      <DetailDialogContext.Provider
        value={{ detailDialogOpen, setDetailDialogOpen }}
      >
        {/* this part is only used for long description */}
        <Dialog
          open={detailDialogOpen}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            {detail}
          </DialogContent>
        </Dialog>
        {/* this part is only used for short description */}
        <Container maxWidth="lg">
          <ButtonBase className={classes.buttonbase} onClick={handleClickOpen}>
            <Grid container>
              <Grid item xs={2}>
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
      </DetailDialogContext.Provider>
    </div>
  );
};

export default DocListItem;
