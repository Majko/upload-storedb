import { Box, Button, Grid, TextField } from "@material-ui/core";
import { useContext, useState } from "react";

import { AddDialogContext }from "../../lib/list/DocList"; //musime naimportovat Context na otvor/close Dialog

const ItemAddDialogContent = ({ addItem }) => {
  const { setAddDialogOpen } = useContext(AddDialogContext); // vyziadaj funkciu na zatvorenie
  const [formstate, setFormstate] = useState({});

  const handleSave = (e) => {
    if (formstate !== {}) {
      addItem(formstate);
      setAddDialogOpen(false);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setFormstate({ ...formstate, [e.target.name]: value });
  };

  return (
    <>
      <h3>Pridavam nieco</h3>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={3}>

          <Grid item xs={12} md={6}>
            <TextField
              id="name"
              label="Name"
              variant="standard"
              name="name"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="content"
              label="Content"
              variant="standard"
              name="content"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="status"
              label="Status"
              variant="standard"
              name="status"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Uloz
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ItemAddDialogContent;
