import { Button, Container, Grid, Typography } from "@mui/material";
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
          <Grid item xs={12}>
            <Typography variant="h6">Name: {detailDialogItem.name}</Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="h6">
              Content: {detailDialogItem.content}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6">Date: {detailDialogItem.date}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6">
              Status: {detailDialogItem.status}
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
