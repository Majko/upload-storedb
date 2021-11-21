import { green, grey, orange } from "@mui/material/colors";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ArrowUpward, MoneyOutlined } from "@material-ui/icons";
import { Bar } from 'react-chartjs-2';

const useStyles = makeStyles({
  root: {
    backgroundColor: grey[0],
    marginTop:10,
    minHeight:400,
  },
  increase: {
    color: green[500],
    mr: 1,
    marginRight:10,
  },
  avater: {
    backgroundColor: orange[300],
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

const Sales = () => {
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
          <Typography className={classes.increase}
            variant="body2"
          >
            12%
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Since last month
          </Typography>
        </Box>
        <Bar data={data} options={options} />
      </CardContent>
    </Card>
  );
};

export default Sales;


const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Revenue',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor:  'rgba(255, 99, 132, 0.2)',
      borderColor:  'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};


