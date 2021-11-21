import { Button, Grid, Typography } from "@mui/material";
import { useContext } from "react";

import { DetailDialogContext } from "../../lib/list/DocList";

const ItemFullDetailView = ({ item, deleteItem }) => {
  const { setDetailDialogOpen } = useContext(DetailDialogContext); // vyziadaj funkciu na zatvorenie

const handleDelete = ()=>{
  console.log('deleting:', item.id);
  deleteItem(item.id)
  setDetailDialogOpen(false)
}

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12} md={12}>
          <Typography color="textPrimary" component={"span"} variant="h5">
            {item.company}
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography
            color="textSecondary"
            gutterBottom
            component={"span"}
            variant="h6"
          >
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
      <Button onClick={handleDelete} variant="contained" color="secondary">
        Zmaž
      </Button>
    </div>
  );
};

export default ItemFullDetailView;
