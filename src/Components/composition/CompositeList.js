import DocList from "./DocList";
import DocListItem from "./DocListItem";
import ItemShortDetail from "./ItemShortDetail";
import ItemFullDetail from "./ItemFullDetail";
import ItemAddDialogContent from "./ItemAddDialogContent";
import DocListAddDialog from "./DocListAddDialog";
import { useState } from "react";
import { Button } from "@material-ui/core";

const CompositeList = () => {
  // const [dataArray, addDataItem, modifyDataItem, removeDataItem] = useDataTest();
  const [mydata, nextPage] = useDataTest(5);

  return (
    <>
      <DocList data={data} title="Vydane FA">
        {mydata.map((item, index) => {
          return (
            <>
              <DocListItem key={index} detail={<ItemFullDetail item={item} />}>
                <ItemShortDetail key={index} item={item} />
              </DocListItem>
            </>
          );
        })}
        <Button color="secondary" onClick={nextPage}> Dalsia strana</Button>
        <DocListAddDialog>{<ItemAddDialogContent />}</DocListAddDialog>
      </DocList>
    </>
  );
};

export default CompositeList;

const useDataTest = (pageNum) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(pageNum);
  const [dataArray, setDataArray] = useState(data.slice(start, end));

  const nextPage = () => {
    if ((dataArray.length ) < pageNum) return null;
    const newStart = start + pageNum
    const newEnd = end + pageNum
    console.log("nastavujem data:", newStart, " ", newEnd);
    setDataArray((prevArray) => [...prevArray, ...data.slice(newStart, newEnd)]);
    setStart(newStart);
    setEnd(newEnd);
  };

  return [dataArray, nextPage];
};

const data = [
  {
    name: "A",
    content: "ssssssssssssssssss",
    date: "12.9.2021",
    status: "open",
  },
  { name: "B", content: "eeeeeeeeeeeeeeee", date: "12.9.2021", status: "open" },
  { name: "C", content: "eeeeeeeeeeeeeeee", date: "12.9.2021", status: "open" },
  {
    name: "D",
    content: "ssssssssssssssssss",
    date: "12.9.2021",
    status: "closed",
  },
  { name: "E", content: "eeeeeeeeeeeeeeee", date: "30.9.2021", status: "open" },
  { name: "F", content: "eeeeeeeeeeeeeeee", date: "12.9.2021", status: "open" },
  {
    name: "G",
    content: "ssssssssssssssssss",
    date: "12.9.2021",
    status: "open",
  },
  { name: "H", content: "eeeeeeeeeeeeeeee", date: "12.9.2021", status: "open" },
  { name: "I", content: "eeeeeeeeeeeeeeee", date: "12.9.2021", status: "open" },
  {
    name: "J",
    content: "ssssssssssssssssss",
    date: "12.9.2021",
    status: "closed",
  },
  { name: "K", content: "eeeeeeeeeeeeeeee", date: "30.9.2021", status: "open" },
  { name: "L", content: "eeeeeeeeeeeeeeee", date: "12.9.2021", status: "open" },
  {
    name: "M",
    content: "ssssssssssssssssss",
    date: "12.9.2021",
    status: "open",
  },
  { name: "N", content: "eeeeeeeeeeeeeeee", date: "12.9.2021", status: "open" },
  {
    name: "O",
    content: "eeeeeeeeeeeeeeee",
    date: "30.9.2021",
    status: "closed",
  },
  {
    name: "P",
    content: "ssssssssssssssssss",
    date: "12.9.2021",
    status: "open",
  },
  { name: "R", content: "eeeeeeeeeeeeeeee", date: "30.9.2021", status: "open" },
  { name: "S", content: "eeeeeeeeeeeeeeee", date: "12.9.2021", status: "open" },
  {
    name: "T",
    content: "ssssssssssssssssss",
    date: "12.9.2021",
    status: "closed",
  },
  { name: "U", content: "eeeeeeeeeeeeeeee", date: "12.9.2021", status: "open" },
  { name: "V", content: "eeeeeeeeeeeeeeee", date: "12.9.2021", status: "open" },
  {
    name: "Z",
    content: "ssssssssssssssssss",
    date: "12.9.2021",
    status: "open",
  },
  { name: "B", content: "eeeeeeeeeeeeeeee", date: "30.9.2021", status: "open" },
  { name: "C", content: "eeeeeeeeeeeeeeee", date: "12.9.2021", status: "open" },
  {
    name: "A",
    content: "ssssssssssssssssss",
    date: "12.9.2021",
    status: "closed",
  },
  {
    name: "B",
    content: "eeeeeeeeeeeeeeee",
    date: "30.9.2021",
    status: "closed",
  },
  { name: "C", content: "eeeeeeeeeeeeeeee", date: "12.9.2021", status: "open" },
  {
    name: "A",
    content: "ssssssssssssssssss",
    date: "12.9.2021",
    status: "open",
  },
  {
    name: "B",
    content: "eeeeeeeeeeeeeeee",
    date: "30.9.2021",
    status: "closed",
  },
  { name: "C", content: "eeeeeeeeeeeeeeee", date: "12.9.2021", status: "open" },
  {
    name: "A",
    content: "ssssssssssssssssss",
    date: "12.9.2021",
    status: "closed",
  },
  { name: "B", content: "eeeeeeeeeeeeeeee", date: "12.9.2021", status: "open" },
  {
    name: "C",
    content: "eeeeeeeeeeeeeeee",
    date: "12.9.2021",
    status: "closed",
  },
  {
    name: "A",
    content: "ssssssssssssssssss",
    date: "12.9.2021",
    status: "open",
  },
  {
    name: "B",
    content: "eeeeeeeeeeeeeeee",
    date: "12.9.2021",
    status: "closed",
  },
  { name: "C", content: "eeeeeeeeeeeeeeee", date: "12.9.2021", status: "open" },
  {
    name: "A",
    content: "ssssssssssssssssss",
    date: "12.9.2021",
    status: "closed",
  },
  { name: "B", content: "eeeeeeeeeeeeeeee", date: "12.9.2021", status: "open" },
  { name: "C", content: "eeeeeeeeeeeeeeee", date: "12.9.2021", status: "open" },
];
