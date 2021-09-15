import { Button } from "@material-ui/core";

const ItemAddDialogContent = ({setDialogOpen}) => {

const handleSave = ()=>{
  //save item
  setDialogOpen(false)
}

  return (
    <>
      <h3>Pridavam nieco</h3>
      <Button onClick={handleSave}>Uloz</Button>
    </>
  );
};

export default ItemAddDialogContent
