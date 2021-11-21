import { Avatar, Button, Grid } from "@material-ui/core";
import { DetailDialogContext } from "../../lib/list/DocList";
import { useContext, useState } from "react";
import { ChangeCircle } from "@mui/icons-material";

const ItemFullDetail = ({
  ViewComponent,
  ModifyComponent,
  deleteItem,
  modifyItem,
}) => {
  const { setDetailDialogOpen, detailDialogItem } = useContext(
    DetailDialogContext
  );
  const [modify, setModify] = useState(false);

  const handleDelete = () => {
    deleteItem(detailDialogItem.id);
    setDetailDialogOpen(false);
  };

  const handleModify = () => {
    modifyItem(detailDialogItem.id);
    setDetailDialogOpen(false);
  };

  const toggleModify = () => {
    setModify(!modify);
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={10}>
          {modify ? (
            <ModifyComponent
              item={detailDialogItem}
              modifyItem={handleModify}
            />
          ) : (
            <ViewComponent item={detailDialogItem} deleteItem={handleDelete} />
          )}
        </Grid>
        <Grid xs={2}>
          <Avatar onClick={() => toggleModify()}>
            <ChangeCircle />
          </Avatar>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setDetailDialogOpen(false)}
        >
          Zavri
        </Button>
      </Grid>
    </div>
  );
};

export default ItemFullDetail;
