import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import DocumentListItem from "./DocumentListItem";
import DocumentDetail from "./DocumentDetail";
import DocumentAddDialog from "./DocumentAddDialog";
import DocumentDialogChildren from "./DocumentDialogChildren";
import DocumentListItemChildren from "./DocumentListItemChildren";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 5,
    position: "relative",
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const DocumentList = ({ dataArray }) => {
  const [detail, setDetail] = useState(null);
  const [data, setData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setData(dataArray);
  }, []);

  const removeData = (item) => {
    // TODO vymaz z DB
    const newData = data.filter((data) => data.id !== item.id);
    setData([...newData]);
  };

  const listOfItems = data.map((item, index) => {
    return (
      <>
        <DocumentListItem
          key={index}
          data={item}
          setDetail={setDetail}
          // avatarname={item.name.substring(0, 2).toUpperCase()}
          avatarname={null}
          className={classes.root}
        >
          <DocumentListItemChildren data={item} setDetail={setDetail}/>
        </DocumentListItem>
      </>
    );
  });

  return (
    <div className={classes.root}>
      {detail ? (
        <DocumentDetail
          data={detail}
          setDetail={setDetail}
          removeData={removeData}
        />
      ) : (
        <div>
          {listOfItems}
          <DocumentAddDialog>
            <DocumentDialogChildren />
          </DocumentAddDialog>
        </div>
      )}
    </div>
  );
};

export default DocumentList;
