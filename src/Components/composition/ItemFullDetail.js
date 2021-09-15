import { Grid } from "@material-ui/core";

const ItemFullDetail = ({ item }) => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <h3>FULL detail for item</h3>
      </Grid>
      <Grid item xs={2}>
        <p>{item.name}</p>
      </Grid>
      <Grid item xs={10}>
        <p>{item.content}</p>
      </Grid>
    </Grid>
  );
};

export default ItemFullDetail;
