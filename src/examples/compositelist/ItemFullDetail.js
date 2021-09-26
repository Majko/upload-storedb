import { Button, Container, Grid } from "@material-ui/core";
import { DetailDialogContext } from "../../lib/list/DocList";
import { useContext } from "react";

const ItemFullDetail = ({ item , deleteItem}) => {
  const { setDetailDialogOpen, detailDialogItem } = useContext(
    DetailDialogContext
  );

  const handleDelete = () => {
    deleteItem(detailDialogItem.id)
    setDetailDialogOpen(false)
  };

  return (
    <div>
      <Container>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Button onClick={handleDelete}>Zmaz</Button>
          </Grid>
          <Grid item xs={12}>
            <h3>FULL detail for item</h3>
          </Grid>
          <Grid item xs={2}>
            <p>{detailDialogItem.name}</p>
          </Grid>
          <Grid item xs={10}>
            <p>{detailDialogItem.content}</p>
          </Grid>
          <Grid item xs={2}>
            <p>{detailDialogItem.date}</p>
          </Grid>
          <Grid item xs={2}>
            <p>Status:</p>
            <p>{detailDialogItem.status}</p>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setDetailDialogOpen(false)}
            >
              Zavri
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ItemFullDetail;
