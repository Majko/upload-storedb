import DocList from "./DocList";
import DocListItem from "./DocListItem";
import ItemShortDetail from "./ItemShortDetail";
import ItemFullDetail from "./ItemFullDetail";
import ItemAddDialogContent from "./ItemAddDialogContent";
import DocListAddDialog from "./DocListAddDialog";

const CompositeList = () => {
  //   const [mydata, addDataItem, modifyDataItem, removeDataItem] = useDataTest();

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
      </DocList>
      <DocListAddDialog>{<ItemAddDialogContent />}</DocListAddDialog>
    </>
  );
};

export default CompositeList;

const data = [
  { name: "A", content: "ssssssssssssssssss" },
  { name: "B", content: "eeeeeeeeeeeeeeee" },
  { name: "C", content: "eeeeeeeeeeeeeeee" },
];
