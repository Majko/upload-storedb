import { Grid, Typography } from "@material-ui/core";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
}));

const DocumentItemChildren = ({ data, setDetail }) => {
  const classes = useStyles();

  const handleClick = (item) => {
    setDetail(data);
  };

  return (
    <Grid container>
      <Grid item xs={6} sm={3}>
        <Typography variant="caption" className={classes.date}>
          Date: <b>{data.date}</b>
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Typography
          className={`${classes.tag} ${classes.orange}`}
          variant="caption"
        >
          {data.tag}
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Typography className={classes.date} variant="caption">
          Amount:{data.amount},- Eur
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Typography className={classes.date} variant="caption">
          VAT:{data.VAT},- Eur
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.description} variant="caption">
          {data.description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DocumentItemChildren;
