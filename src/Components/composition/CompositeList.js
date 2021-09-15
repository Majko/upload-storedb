import DocList from "./DocList";
import DocListItem from "./DocListItem";
import ItemShortDetail from "./ItemShortDetail";
import ItemFullDetail from "./ItemFullDetail";
import ItemAddDialogContent from "./ItemAddDialogContent";
import DocListAddDialog from "./DocListAddDialog";
import { useState } from "react";

const CompositeList = () => {
  //   const [mydata, addDataItem, modifyDataItem, removeDataItem] = useDataTest();
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <DocList data={data} title="Vydane FA">
        {data.map((item, index) => {
          return (
            <>
              <DocListItem key={index} detail={<ItemFullDetail item={item} />}>
                <ItemShortDetail item={item} />
              </DocListItem>
            </>
          );
        })}
        <DocListAddDialog setDialogOpen={setDialogOpen} dialogOpen={dialogOpen}>
          {<ItemAddDialogContent setDialogOpen={setDialogOpen}  />}
        </DocListAddDialog>
      </DocList>
    </>
  );
};

export default CompositeList;

const data = [
  { name: "A", content: "ssssssssssssssssss" },
  { name: "B", content: "eeeeeeeeeeeeeeee" },
  { name: "C", content: "eeeeeeeeeeeeeeee" },
];
