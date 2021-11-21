import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { createContext, useState } from "react";

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
          <Container maxWidth="lg">{children}</Container>
        </div>
      </DetailDialogContext.Provider>
    </AddDialogContext.Provider>
  );
};

export default DocList;
