import { Button } from "@material-ui/core";
import { useContext } from "react";
import { AddDialogContext } from "./DocList"; //musime naimportovat Context na otvor/close Dialog

const ItemAddDialogContent = () => {
  const {addDialogOpen, setAddDialogOpen} = useContext(AddDialogContext) // vyziadaj funkciu na zatvorenie

const handleSave = ()=>{
  //save item
  setAddDialogOpen(false)
}

  return (
    <>
      <h3>Pridavam nieco</h3>
      <Button variant="contained" color="primary" onClick={handleSave}>Uloz</Button>
    </>
  );
};

export default ItemAddDialogContent
