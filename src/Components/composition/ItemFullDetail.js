import { Button, Card, Container, Grid } from "@material-ui/core";
import { DetailDialogContext } from "./DocListItem";
import { useContext } from "react";

const ItemFullDetail = ({ item }) => {
  const { detailDialogOpen, setDetailDialogOpen } = useContext(
    DetailDialogContext
  );

  return (
    <div>
      <Container>
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
