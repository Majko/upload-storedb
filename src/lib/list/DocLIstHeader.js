import {
  Container,
  Grid,
  makeStyles,
  InputBase,
  IconButton,
  Paper,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { Search as SearchIcon } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: grey[200],
    margin: 3,
  },
  searchbox: {
    display: "flex",
    alignItems: "right",
    width: '100%',
    marginTop:10
  },
  inbox:{
      margin:3,
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
          <h2>{title}</h2>
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
