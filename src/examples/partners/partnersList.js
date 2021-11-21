import DocList from "../../lib/list/DocList";
import DocListItem from "../../lib/list/DocListItem";
import ItemShortDetail from "./ItemShortDetail";
import ItemAddDialogContent from "./ItemAddDialogContent";
import DocListHeader from "../../lib/list/DocLIstHeader";
import DocListAddDialog from "../../lib/list/DocListAddDialog";
import DocListDetailDialog from "../../lib/list/DocListDetailDialog";
import DocListDetailDialogView from "../../lib/list/DocListDetailDialogView";
import DocListDetailDialogModify from "../../lib/list/DocListDetailDialogModify";
import useDataPartnerIdentity from "./useDataPartnerIdentity";

import { Button } from "@material-ui/core";
import { useContext, useState } from "react";
import { UserContext } from "../../lib/menu/MainApp";

import ViewComponent from "./ItemFullDetailView";
import ModifyComponent from "./ItemFullDetailModify";

const PartnerList = () => {
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
        <DocListHeader title="Partneri:" setSearchField={handleSearch} />

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
          <DocListDetailDialogView>
            {/* item isautomatically added */}
            <ViewComponent deleteItem={deleteItem} />
          </DocListDetailDialogView>
          <DocListDetailDialogModify>
            {/* item isautomatically added */}
            <ModifyComponent modifyItem={modifyItem}/>
          </DocListDetailDialogModify>
          {/* <ItemFullDetail ViewComponent={ViewComponent} ModifyComponent={ModifyComponent} deleteItem={deleteItem} modifyItem={modifyItem} /> */}
        </DocListDetailDialog>

        <Button color="secondary" onClick={handleNextPage}>
          {" "}
          Dalsia strana
        </Button>
      </DocList>
    </>
  );
};

export default PartnerList;
