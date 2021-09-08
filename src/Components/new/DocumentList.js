import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import DocItem from "./DocumentItem";
import DocumentDetail from "./DocumentDetail";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 5,
    position: "relative",
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

  return (
    <div className={classes.root}>
      {detail ? (
        <DocumentDetail
          data={detail}
          setDetail={setDetail}
          removeData={removeData}
        />
      ) : (
        data.map((item, index) => {
          return (
            <DocItem
              key={index}
              data={item}
              setDetail={setDetail}
              className={classes.root}
            />
          );
        })
      )}
    </div>
  );
};

export default DocumentList;
