import DocList from "./DocList";
import DocListItem from "./DocListItem";
import ItemShortDetail from "./ItemShortDetail";
import ItemFullDetail from "./ItemFullDetail";

const CompositeList = () => {
  //   const [mydata, addDataItem, modifyDataItem, removeDataItem] = useDataTest();

  return (
    // <DocList data={data} add={addDataItem} details={<DocDetails />}>
    <DocList data={data} title="Vydane FA">
      {data.map((item, index) => {
        return (
          <DocListItem
            item={item}
            key={index}
            details={ItemFullDetail }
          >
            <ItemShortDetail item={item} />
          </DocListItem>
        );
      })}
    </DocList>
  );
};

export default CompositeList;

const data = [
  { name: "A", content: "ssssssssssssssssss" },
  { name: "B", content: "eeeeeeeeeeeeeeee" },
  { name: "C", content: "eeeeeeeeeeeeeeee" },
];
