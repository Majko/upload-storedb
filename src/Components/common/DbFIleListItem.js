import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import WorkIcon from "@material-ui/icons/Work";
import Typography from "@material-ui/core/Typography";
import { Fragment } from "react";
import { Badge } from "@material-ui/core";
import { deepOrange, deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  inline: {
    display: "inline",
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

const DbFileListItem = ({ file, handleRemove, selectFile }) => {
  const classes = useStyles();

  return (
    <div>
      <ListItem button alignItems="flex-start" onClick={() => selectFile(file)}>
        <ListItemAvatar>
          <Avatar className={classes.orange}>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <Badge badgeContent="Cakam" color="secondary">
          <ListItemText
            primary={file.name}
            secondary={
              <Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {file.createdAt.slice(0, 10)}
                </Typography>
                <Typography variant="caption">
                  {" — " + file.description.slice(0, 50) + "..."}
                </Typography>
              </Fragment>
            }
          />
        </Badge>
      </ListItem>
      <Divider variant="insdet" component="li" />
    </div>
  );
};

export default DbFileListItem;
