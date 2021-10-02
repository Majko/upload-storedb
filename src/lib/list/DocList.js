import {
  Container,
  Grid,
  makeStyles,
  InputBase,
  IconButton,
  Paper,
  Divider,
} from "@material-ui/core";
import { createContext, useState } from "react";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
  },
}));

export const AddDialogContext = createContext();
export const DetailDialogContext = createContext();

/**
 *
 * @param {Object} children All Ccomnponents children, DocListItem, DocListAddDialog
 * DocListDetailDialog among tehm. DocList provides context for both Dialogs
 * @param {String} title Title on top of the list
 * @returns Component
 */
const DocList = ({ children, title, setSearchField }) => {
  // THe children will have to call
  // const { detailDialogOpen, setDetailDialogOpen } = useContext(AddDialogContext);
  // in order to be able to close the dialog and teh to call setAddDialogOpen(false)
  const [addDialogOpen, setAddDialogOpen] = useState(false);

  // THe children will have to call
  //  const {
  //   detailDialogOpen,
  //   setDetailDialogOpen,
  //   detailDialogItem,
  //   setDetailDialogItem,
  // } = useContext(DetailDialogContext);
  // in order to be able to close the dialog and teh to call setDetailDialogOpen(false)

  //state for Detail Dialog open
  const [detailDialogOpen, setDetailDialogOpen] = useState(false);
  //state for selected Item (click on item in list)
  const [detailDialogItem, setDetailDialogItem] = useState({});

  const classes = useStyles();

  return (
    <AddDialogContext.Provider value={{ addDialogOpen, setAddDialogOpen }}>
      <DetailDialogContext.Provider
        value={{
          detailDialogOpen,
          setDetailDialogOpen,
          detailDialogItem,
          setDetailDialogItem,
        }}
      >
        <div className={classes.root}>
          <Container maxWidth="lg">
            <DocListHeader title={title} setSearchField={setSearchField}/>
            {children}
          </Container>
        </div>
      </DetailDialogContext.Provider>
    </AddDialogContext.Provider>
  );
};

export default DocList;

const DocListHeader = ({ title, setSearchField }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchField(searchInput);
  };
  return (
    <Container>
      <Grid container>
        <Grid item xs={6}>
          <h2>{title}</h2>
        </Grid>
        <Grid item xs={6}>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search "
              inputProps={{ "aria-label": "search" }}
              onChange={handleChange}
            />
            <IconButton
              onClick={handleSearch}
              sx={{ p: "10px" }}
              aria-label="search"
            >
              <Search />
            </IconButton>
          </Paper>
        </Grid>
        <Divider/>
      </Grid>
    </Container>
  );
};
