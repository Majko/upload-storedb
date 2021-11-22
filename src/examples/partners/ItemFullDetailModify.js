import { TextField, Button, Container, Grid } from "@mui/material";
import { useContext, useState } from "react";

import { DetailDialogContext } from "../../lib/list/DocList"; //musime naimportovat Context na otvor/close Dialog

const ItemFullDetailModify = ({ item, modifyItem }) => {
  const { setDetailDialogOpen } = useContext(DetailDialogContext); // vyziadaj funkciu na zatvorenie
  const [formstate, setFormstate] = useState(item);

  const handleChange = (e) => {
    const value = e.target.value;
    setFormstate({ ...formstate, [e.target.name]: value });
  };

  const handleModify = () => {
    if (formstate !== {}) {
      // eslint-disable-next-line no-restricted-globals
      if (confirm("Skutočne si prajete dokumnet zmazať?")) {
        // First we have to delete all properties that are inserted automatically
        let myJson = formstate;
        delete myJson.createdAt;
        delete myJson.updatedAt;
        delete myJson.owner;
        modifyItem(myJson.id, myJson);
        setDetailDialogOpen(false);
      } else {
        console.log('Modify canceled!');
      }
    }
  };

  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              id="company"
              label="company"
              variant="standard"
              name="company"
              onChange={handleChange}
              defaultValue={item.company}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="division"
              label="division"
              variant="standard"
              name="division"
              onChange={handleChange}
              defaultValue={item.division}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="name"
              label="name"
              variant="standard"
              name="name"
              onChange={handleChange}
              defaultValue={item.name}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="city"
              label="city"
              variant="standard"
              name="city"
              onChange={handleChange}
              defaultValue={item.city}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="street"
              label="street"
              variant="standard"
              name="street"
              onChange={handleChange}
              defaultValue={item.street}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="zip"
              label="zip"
              variant="standard"
              name="zip"
              onChange={handleChange}
              defaultValue={item.zip}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="ico"
              label="ico"
              variant="standard"
              name="ico"
              onChange={handleChange}
              defaultValue={item.ico}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="dic"
              label="dic"
              variant="standard"
              name="dic"
              onChange={handleChange}
              defaultValue={item.dic}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Button
              onClick={handleModify}
              variant="contained"
              color="secondary"
            >
              Ulož
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ItemFullDetailModify;
