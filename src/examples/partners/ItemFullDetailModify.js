import { Button, Container, Grid, Typography } from "@material-ui/core";
import { TextField } from "@mui/material";
import { useState } from "react";



const ItemFullDetailModify = ({ item, modifyItem }) => {
  
  const [formstate, setFormstate] = useState({});
  
  
  const handleChange = (e) => {
    const value = e.target.value;
    setFormstate({ ...formstate, [e.target.name]: value });
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
              id="name"
              label="name"
              variant="standard"
              name="name"
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
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Button
              onClick={modifyItem}
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
