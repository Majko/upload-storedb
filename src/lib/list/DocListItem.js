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
import { useContext } from "react";

import { DetailDialogContext } from "./DocList";

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
    padding: 2,
  },
  buttonbase: {
    width: "90%",
    textAlign: "left",
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
const DocListItem = ({ children, avatarname, item }) => {
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
      <Container maxWidth="lg">
        <ButtonBase
          className={classes.buttonbase}
          onClick={() => handleClickOpen()}
        >
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
    </div>
  );
};

export default DocListItem;
