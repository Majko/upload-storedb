import { blue, grey, red } from "@material-ui/core/colors";
import {
  Avatar,
  Card,
  CardContent,
  // Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Grid from "@mui/material/Grid";
import BusinessIcon from "@mui/icons-material/Business";

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
  avatar: {
    backgroundColor: blue[600],
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

const ItemShortDetail = ({ item }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
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
          <Grid item xs={3} sm={2} md={1}>
            <Avatar className={classes.avatar}>
              <BusinessIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ItemShortDetail;
