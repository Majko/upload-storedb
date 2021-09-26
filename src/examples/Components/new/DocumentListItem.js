import {
  Avatar,
  ButtonBase,
  Container,
  Divider,
  Grid,
} from "@material-ui/core";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core";
import { Assignment } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  avatar: {
    padding: 2,
    margin: 3,
  },
  item: {
    left: 5,
    padding: 5,
  },
  name: {
    position: "relative",
    left: 0,
  },
  tag: {
    borderRadius: 10,
    padding: 3,
  },
  date: {
    padding: 1,
  },
  description: {
    textAlign: "left",
    justifyContent: "left",
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

const DocumentListItem = ({ avatarname, data, setDetail, children }) => {
  const classes = useStyles();

  const handleClick = (item) => {
    setDetail(data);
  };

  return (
    <div className={classes.item}>
      <Container maxWidth="lg">
        <ButtonBase onClick={() => handleClick(data)}>
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
    </div>
  );
};

export default DocumentListItem;
