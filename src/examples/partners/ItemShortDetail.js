import { grey, red } from "@material-ui/core/colors";
import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles({
  root: {
    backgroundColor: grey[0],
    marginTop: 10,
    width: "100%",
  },
  increase: {
    color: red[900],
    mr: 1,
    marginRight: 10,
  },
  grid: {
    justifyContent: "space-between",
  },
  box: {
    pt: 2,
    display: "flex",
    alignItems: "center",
  },
});

const ItemShortDetail = ({ item }) => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={9} sm={10} md={11}>
          <Grid item xs={6} md={3}>
            <Typography color="textPrimary" variant="h6">
              {item.company}
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography color="textSecondary" gutterBottom variant="caption">
              Mesto: {item.city}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ItemShortDetail;
