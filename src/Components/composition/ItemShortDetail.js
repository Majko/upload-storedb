import { Card, Grid } from "@material-ui/core";

const ItemShortDetail = ({ item }) => {
  return (
      <Grid container spacing={0}>
        <Grid item xs={10}>
          <h3>itemized detail for: </h3>
        </Grid>
        <Grid item xs={2}>
          <h3>{item.name}</h3>
        </Grid>
        <Grid item xs={12}>
          <p>{item.content}</p>
        </Grid>
      </Grid>
  );
};

export default ItemShortDetail;
