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
      <h3>Pridavam Partnera</h3>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={3}>
        {/* company: String!
        division: String
        name: String
        city: String!
        street: String!
        zip: String!
        ico: String!
        dic: String!
        email: AWSEmail
        tenant: String! */}

          <Grid item xs={12} md={6}>
            <TextField
              id="company"
              label="company"
              variant="standard"
              name="company"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="division"
              label="division"
              variant="standard"
              name="division"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="city"
              label="city"
              variant="standard"
              name="city"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="street"
              label="street"
              variant="standard"
              name="street"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="zip"
              label="zip"
              variant="standard"
              name="zip"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="ico"
              label="ico"
              variant="standard"
              name="ico"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="dic"
              label="dic"
              variant="standard"
              name="dic"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="email"
              label="email"
              variant="standard"
              name="email"
              onChange={handleChange}
            />
          </Grid>
          {/* <Grid item xs={12} md={6}>
            <TextField
              id="tenant"
              label="tenant"
              variant="standard"
              name="tenant"
              onChange={handleChange}
            />
          </Grid> */}
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
