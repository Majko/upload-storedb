import { Card, Container, Grid, Typography } from "@material-ui/core";

const ItemShortDetail = ({ item }) => {
  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={10}>
          <Typography variant="caption">itemized detail for:</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="subtitle1">
            <b>{item.name}</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption">{item.content}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="caption">{item.status}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="caption">
            <b>{item.date}</b>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ItemShortDetail;
