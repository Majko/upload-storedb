import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { DeleteRounded } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  item: {
    left: 5,
    padding: 5,
  },
  name: {
    position: "relative",
    left: 0,
  },
  tag: {
    borderRadius: 10,
    border:'1px solid',
    padding: 4,
  },
}));

const DocumentDetail = ({ data, setDetail, removeData }) => {
  const classes = useStyles();

  const handleDelete = (data) => {
    removeData(data);
    setDetail(null); //return to main page
  };

  return (
    <Container>
      <Grid container>
        <Grid item xs={1}>
          <IconButton
            aria-label="delete"
            onClick={() => {
              setDetail(null);
            }}
            size="large">
            <ArrowBackIosIcon />
          </IconButton>
        </Grid>
        <Grid item xs={11}>
          <Card>
            <CardHeader
              action={
                <IconButton onClick={() => handleDelete(data)} size="large">
                  <DeleteRounded />
                </IconButton>
              }
              title={data.name}
              subheader={data.description}
            />
            <CardContent>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="caption">
                    Date: <b>{data.date}</b>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="caption" className={classes.tag}>
                    {data.tag}{" "}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="caption">
                    Amount:{data.amount},- Eur
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="caption">
                    VAT:{data.VAT},- Eur
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="caption">{data.description}</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DocumentDetail;
