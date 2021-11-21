import { grey, red } from "@mui/material/colors";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
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
        <Grid item xs={12} md={6}>
          <Typography color="textPrimary" variant="h6">
            {item.company}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography color="textSecondary" gutterBottom variant="caption">
            Mesto: {item.city}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ItemShortDetail;
