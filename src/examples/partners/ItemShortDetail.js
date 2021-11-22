import { green, grey, red } from "@mui/material/colors";
import { Avatar, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { ArrowDownward, AttachMoney } from "@mui/icons-material";

const useStyles = makeStyles({
  root: {
    backgroundColor: grey[10],
    marginTop: 10,
  },
  increase: {
    color: red[900],
    mr: 1,
    marginRight: 10,
  },
  avater: {
    backgroundColor: green[300],
    height: 56,
    width: 56,
  },
  grid: {
    justifyContent: "space-between",
  },
  box: {
    padding: 10,
    pt: 2,
    display: "flex",
    alignItems: "center",
  },
});

const ItemShortDetail = ({ item }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={0} className={classes.grid}>
        <Grid item xs={10}>
          <Typography color="textSecondary" gutterBottom variant="h6">
            IČO: {item.ico}
          </Typography>
          <Typography color="textPrimary" gutterBottom variant="h4">
            {item.company}
          </Typography>
          <Box className={classes.box}>
            <ArrowDownward className={classes.increase} />
            <Typography className={classes.increase} variant="body2">
              12%
            </Typography>
            <Typography color="textSecondary" variant="caption">
              Since last month
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Avatar className={classes.avater}>
            <AttachMoney />
          </Avatar>
        </Grid>
      </Grid>
    </div>
  );
};

export default ItemShortDetail;
