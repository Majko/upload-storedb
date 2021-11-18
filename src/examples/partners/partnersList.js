import DocList from "../../lib/list/DocList";
import DocListItem from "../../lib/list/DocListItem";
import ItemShortDetail from "./ItemShortDetail";
import ItemFullDetail from "./ItemFullDetail";
import ItemAddDialogContent from "./ItemAddDialogContent";
import DocListAddDialog from "../../lib/list/DocListAddDialog";
import { Button } from "@material-ui/core";
import DocListDetailDialog from "../../lib/list/DocListDetailDialog";

import useDataPartnerIdentity from "./useDataPartnerIdentity";
import { useContext, useState } from "react";
import DocListHeader from "../../lib/list/DocLIstHeader";
import { UserContext } from "../../lib/menu/MainApp";

const CompositeList = () => {
  const [searchField, setSearchField] = useState("");
  //ziskaj user context
  const user = useContext(UserContext);
  
  const {
    dataArray,
    nextPage,
    addItem,
    modifyItem,
    deleteItem,
    searchItems,
  } = useDataPartnerIdentity(5, searchField, user);

  const handleNextPage = async () => {
    await nextPage();
  };

  const handleSearch = async (field) => {
    setSearchField(field);
    await searchItems(field);
  };


  return (
    <>
      <DocList>
        <DocListHeader title="Vydane FA" setSearchField={handleSearch} />

        {dataArray &&
          dataArray.map((item, index) => {
            return (
              <div key={index}>
                <DocListItem item={item}>
                  {/* item is automatically passed from DocListItem to child element */}
                  <ItemShortDetail />
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
