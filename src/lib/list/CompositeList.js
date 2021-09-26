import DocList from "./DocList";
import DocListItem from "./DocListItem";
import ItemShortDetail from "./ItemShortDetail";
import ItemFullDetail from "./ItemFullDetail";
import ItemAddDialogContent from "./ItemAddDialogContent";
import DocListAddDialog from "./DocListAddDialog";
import { Button } from "@material-ui/core";
import DocListDetailDialog from "./DocListDetailDialog";

import useDataTest from "./useDataTest";

const CompositeList = () => {
  const { dataArray, nextPage, addItem, modifyItem, deleteItem } = useDataTest(
    2
  );

  const handleNextPage = async () => {
    const ret = await nextPage(2);
  };

  return (
    <>
      <DocList title="Vydane FA">
        {dataArray &&
          dataArray.map((item, index) => {
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
          <ItemFullDetail deleteItem={deleteItem} modifyItem={modifyItem} />
        </DocListDetailDialog>

        <Button color="secondary" onClick={handleNextPage}>
          {" "}
          Dalsia strana
        </Button>
      </DocList>
    </>
  );
};

export default CompositeList;
