import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { DetailDialogContext } from "./DocList";
import { useContext } from "react";

// const useStyles = makeStyles((theme) => ({}));


/**
 * @description Component which children will form the  Content for Dialog when clicking one of the short items
 * const {detailDialogOpen, setDetailDialogOpen, detailDialogItem, setDetailDialogItem } = useContext(DetailDialogContext);
 * in order to reach the state of the dialog as weel as method used to open/close the dialog
 * @param {Object} children - all children
 * @returns Component
 */
const DocListDetailDialog = ({ children }) => {
  // const classes = useStyles();
  const {
    detailDialogOpen,
    setDetailDialogOpen,
  } = useContext(DetailDialogContext);

  const handleClose = () => {
    setDetailDialogOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={detailDialogOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Detailny pohlad na  dokument</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Detialne hopdnoty jednotlivych atributov:
          </DialogContentText>
          {children}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DocListDetailDialog;
