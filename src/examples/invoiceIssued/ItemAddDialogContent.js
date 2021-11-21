import { Box, Button, Grid, TextField } from "@mui/material";
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
              id="symVar"
              label="Variabinlny symbol"
              variant="standard"
              name="symVar"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="dateTax"
              label="dateTax"
              variant="standard"
              name="dateTax"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="dateDue"
              label="dateDue"
              variant="standard"
              name="dateDue"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="text"
              label="text"
              variant="standard"
              name="text"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="partner"
              label="partner"
              variant="standard"
              name="partner"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="accountNo"
              label="accountNo"
              variant="standard"
              name="accountNo"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="priceNone"
              label="priceNone"
              variant="standard"
              name="priceNone"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="priceLow"
              label="priceLow"
              variant="standard"
              name="priceLow"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="priceHigh"
              label="priceHigh"
              variant="standard"
              name="priceHigh"
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
