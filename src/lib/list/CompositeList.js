import DocList from "./DocList";
import DocListItem from "./DocListItem";
import ItemShortDetail from "./ItemShortDetail";
import ItemFullDetail from "./ItemFullDetail";
import ItemAddDialogContent from "./ItemAddDialogContent";
import DocListAddDialog from "./DocListAddDialog";
import { useState } from "react";
import { Button } from "@material-ui/core";
import DocListDetailDialog from "./DocListDetailDialog";

import { datasource } from "./testdata";

const CompositeList = () => {
  const {dataArray, nextPage, addItem, modifyItem, deleteItem} = useDataTest(5);

  return (
    <>
      <DocList title="Vydane FA">
        {dataArray.map((item, index) => {
          return (
            <div key={index}>
              <DocListItem item={item}>
                <ItemShortDetail item={item} />
              </DocListItem>
            </div>
          );
        })}

        <DocListAddDialog>
          <ItemAddDialogContent addItem={addItem} />
        </DocListAddDialog>
        <DocListDetailDialog>
          <ItemFullDetail deleteItem={deleteItem} modifyItem={modifyItem}/>
        </DocListDetailDialog>

        <Button color="secondary" onClick={nextPage}>
          {" "}
          Dalsia strana
        </Button>
      </DocList>
    </>
  );
};

export default CompositeList;

const useDataTest = (pageNum) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(pageNum);
  const [dataArray, setDataArray] = useState(datasource.slice(start, end));

  const nextPage = () => {
    // if (dataArray.length < pageNum) return null;
    const newStart = start + pageNum;
    const newEnd = end + pageNum;
    console.log("nastavujem data:", newStart, " ", newEnd);
    setDataArray((prevArray) => [
      ...prevArray,
      ...datasource.slice(newStart, newEnd),
    ]);
    setStart(newStart);
    setEnd(newEnd);
  };

  const addItem = (item) => {
    setDataArray((previous) => [...previous, item]);
  };

  const modifyItem = (id, item) => {
    const newArray = dataArray.map((elem) => {
      return elem.id === id ? item : elem;
    });
    setDataArray(newArray);
  };

  const deleteItem = (id) => {
    
    let newArray = []
    dataArray.forEach((elem) => {
      if (elem.id !== id)
       newArray.push(elem)
    });
    setDataArray(newArray);
  };

  return {dataArray, nextPage, addItem, modifyItem, deleteItem};
};
