import { green, grey, red } from "@material-ui/core/colors";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { ArrowUpward, MoneyOutlined } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    backgroundColor: grey[0],
    marginTop: 10,
  },
  increase: {
    color: green[500],
    mr: 1,
    marginRight: 10,
  },
  avater: {
    backgroundColor: red[300],
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

const Revenue = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={3} className={classes.grid}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              REVENUE
            </Typography>
            <Typography color="textPrimary" variant="h4">
              $24,000
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avater}>
              <MoneyOutlined />
            </Avatar>
          </Grid>
        </Grid>
        <Box className={classes.box}>
          <ArrowUpward className={classes.increase} />
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

export default Revenue;
