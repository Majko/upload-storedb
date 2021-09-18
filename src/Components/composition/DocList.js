import { Container, makeStyles } from "@material-ui/core";
import { createContext, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
  },
}));

export const AddDialogContext = createContext();

const DocList = ({ children, title }) => {
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  // THe children will have to call
  // const { detailDialogOpen, setDetailDialogOpen } = useContext(AddDialogContext);
  // in order to be able to close the dialog and teh to call setAddDialogOpen(false)

  const classes = useStyles();
  return (
    <AddDialogContext.Provider value={{ addDialogOpen, setAddDialogOpen }}>
        <div className={classes.root}>
          <Container maxWidth="lg">
            <h2>{title}</h2>
            {children}
          </Container>
        </div>
    </AddDialogContext.Provider>
  );
};

export default DocList;
