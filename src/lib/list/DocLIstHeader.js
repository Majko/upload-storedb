import {
  Grid,
  InputBase,
  IconButton,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";
import { Search as SearchIcon } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: grey[200],
    margin: 3,
  },
  title:{
    margin:8
  },
  searchbox: {
    display: "flex",
    marginTop:10,
    marginRight:10
  },
  inbox:{
      margin:3,
      width:"100%",
  }
}));

const DocListHeader = ({ title, setSearchField }) => {
  const [searchInput, setSearchInput] = useState("");
  const classes = useStyles();

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchField(searchInput);
  };
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <div className={classes.title}>
          <h2>{title}</h2>
          </div>
        </Grid>
        <Grid item xs={6}>
          <Paper component="form" className={classes.searchbox}>
            <InputBase onChange={handleChange} className={classes.inbox}/>
            <IconButton onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default DocListHeader;
