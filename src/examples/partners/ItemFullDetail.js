import { Button, Container, Grid, Typography } from "@material-ui/core";
import { DetailDialogContext } from "../../lib/list/DocList";
import { useContext } from "react";

const ItemFullDetail = ({ item, deleteItem }) => {
  const { setDetailDialogOpen, detailDialogItem } = useContext(
    DetailDialogContext
  );

  const handleDelete = () => {
    // deleteItem(detailDialogItem.name);
    deleteItem(detailDialogItem.id);
    setDetailDialogOpen(false);
  };

  return (
    <div>
      <Container>
        <Grid container spacing={0}>
          <Grid item xs={12} md={12}>
            <Typography color="textPrimary" variant="h4">
              {detailDialogItem.company}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography color="textSecondary" gutterBottom variant="h6">
              Mesto: {detailDialogItem.city}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography color="textSecondary" gutterBottom variant="caption">
              Ulica: {detailDialogItem.street}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography color="textSecondary" gutterBottom variant="caption">
              PSČ: {detailDialogItem.zip}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography color="textSecondary" gutterBottom variant="caption">
              Meno: {detailDialogItem.name}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography color="textSecondary" gutterBottom variant="caption">
              Divizia: {detailDialogItem.division}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography color="textSecondary" gutterBottom variant="caption">
              IČO: {detailDialogItem.ico}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography color="textSecondary" gutterBottom variant="caption">
              DIČ: {detailDialogItem.dic}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography color="textSecondary" gutterBottom variant="caption">
              Email: {detailDialogItem.email}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setDetailDialogOpen(false)}
            >
              Zavri
            </Button>

            <Button onClick={handleDelete} color="secondary">
              Zmaz
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ItemFullDetail;
