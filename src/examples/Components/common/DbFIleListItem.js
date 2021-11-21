import { makeStyles } from "@mui/styles";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import WorkIcon from "@mui/icons-material/Work";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import { Badge } from "@mui/material";
import { deepOrange, grey } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  inline: {
    display: "inline",
  },
  orange: {
    color: grey[100],
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
      <Divider variant="inset" component="li" />
    </div>
  );
};

export default DbFileListItem;
