import { green, grey, red } from "@mui/material/colors";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ArrowDownward, AttachMoney } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    backgroundColor: grey[0],
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
    pt: 2,
    display: "flex",
    alignItems: "center",
  },
});

const Profit = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={3} className={classes.grid}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              PROFIT
            </Typography>
            <Typography color="textPrimary" variant="h4">
              $2,000
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avater}>
              <AttachMoney />
            </Avatar>
          </Grid>
        </Grid>
        <Box className={classes.box}>
          <ArrowDownward className={classes.increase} />
          <Typography className={classes.increase} variant="body2">
            12%
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Since last month
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Profit;
