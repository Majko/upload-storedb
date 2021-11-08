import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import Revenue from "./Revenue";
import Profit from "./Profit";
import { grey } from "@material-ui/core/colors";
import Sales from "./Sales";
import LatestOrders from "./LatestOrders";

const useStyles = makeStyles({
  root: {
    backgroundColor: grey[200],
  },
});

const Home = ({ company }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box>
        <Container maxWidth="xl">
          <Grid container spacing={1}>
            <Grid item lg={6} xs={12} md={6} sm={6} >
              <Revenue />
            </Grid>
            <Grid item lg={6} xs={12} md={6} sm={6} >
              <Profit />
            </Grid>
            <Grid item lg={6} xs={12} md={12}>
              <Sales />
            </Grid>
            <Grid item lg={6} xs={12} md={12}>
              <LatestOrders />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Home;
