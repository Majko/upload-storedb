import { Button, Container, Grid, Typography } from "@material-ui/core";

const ItemFullDetailView= ({ item, deleteItem }) => {
  return (
    <div>
        <Grid container spacing={0}>
          <Grid item xs={12} md={12}>
            <Typography color="textPrimary" component={'span'} variant="h5">
              {item.company}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography color="textSecondary" gutterBottom component={'span'} variant="h6">
              Mesto: {item.city}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography color="textSecondary" gutterBottom variant="caption">
              Ulica: {item.street}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography color="textSecondary" gutterBottom variant="caption">
              PSČ: {item.zip}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography color="textSecondary" gutterBottom variant="caption">
              Meno: {item.name}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography color="textSecondary" gutterBottom variant="caption">
              Divizia: {item.division}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography color="textSecondary" gutterBottom variant="caption">
              IČO: {item.ico}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography color="textSecondary" gutterBottom variant="caption">
              DIČ: {item.dic}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography color="textSecondary" gutterBottom variant="caption">
              Email: {item.email}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {/* <Grid item xs={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setDetailDialogOpen(false)}
            >
              Zavri
            </Button>
          </Grid> */}
          <Grid item xs={6}>
            <Button
              onClick={deleteItem}
              variant="contained"
              color="secondary"
            >
              Zmaž
            </Button>
          </Grid>
        </Grid>
    </div>
  );
};

export default ItemFullDetailView;
