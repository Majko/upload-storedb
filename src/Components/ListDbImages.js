import { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listPictures } from "../graphql/queries";
import { deletePicture } from "../graphql/mutations";

import VisDocument from "../lib/visualize/VisDocument";

import Typography from "@material-ui/core/Typography";
import { Container, Fab } from "@material-ui/core";
import DbFileCard from "./common/DbFileCard";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";

import { useEffect } from "react";

import { useRemoveFile } from "../lib/aws/removeFile";
import DbFileListItem from "./common/DbFIleListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    height:'100%',
    position: 'relative',
    minHeight: '100%',
  },
  listRoot: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

/**
 * @description Shows list of all tenants image names from db and renders image for a selected one
 * @param {*} None
 * @returns None
 */
function ListDbImages(props) {
  const classes = useStyles();
  const [dbFiles, setDbFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileprops, setFileprops] = useState(null);
  const { removeFile } = useRemoveFile();

  useEffect(() => {
    getDbFiles();
  }, []);

  // Get list of all tenant files from DB
  const getDbFiles = async () => {
    // load all group's IdentityIDs (all having same tenant)
    const myFiles = await API.graphql(graphqlOperation(listPictures), {});
    setDbFiles(myFiles.data.listPictures.items);
  };

  const deleteImageFromDB = async (id) => {
    try {
      await API.graphql(graphqlOperation(deletePicture, { input: { id: id } }));
    } catch (error) {
      console.log(error);
    }
  };

  // const selectImage = async (e, file) => {
  //   e.preventDefault();
  //   const { signedUrl, key } = await fetchFile(
  //     file.file.identityID,
  //     file.file.key
  //   );
  //   setFileprops({ signedUrl, key });
  // };

  const onRemove = async (filename, id) => {
    try {
      setFileprops(null);
      removeFile(filename);
      deleteImageFromDB(id);
      const indexToRemove = dbFiles.findIndex((element) => {
        return element.id === id;
      });
      if (indexToRemove > -1) {
        let newDbFiles = dbFiles;
        newDbFiles.splice(indexToRemove, 1);
        setDbFiles([...newDbFiles]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (selectedFile) {
    return (
      <DbFileCard
        file={selectedFile}
        handleRemove={onRemove}
        setFile={setSelectedFile}
      />
    );
  } else {
    return (
      <Container>
        {/* show list of all files as link */}
        <Typography variant="subtitle2" color="primary" gutterBottom>
          Group's Images from Db :
        </Typography>
        {dbFiles.map((file) => {
          console.log(file);
          return (
            <div key={file.id}>
              <List className={classes.listRoot}>
                <DbFileListItem
                  file={file}
                  handleRemove={onRemove}
                  selectFile={setSelectedFile}
                />
              </List>
              {/* <DbFileCard file={file} handleRemove={onRemove} /> */}
            </div>
          );
        })}
        {/* if a select a file, renders the picture */}
        {fileprops && (
          <>
            <VisDocument
              fileName={fileprops.key}
              fileUrl={fileprops.signedUrl}
            />
          </>
        )}
        <div className={classes.root}>
          <label htmlFor="upload-photo">
            <input
              style={{ display: "none" }}
              id="upload-photo"
              name="upload-photo"
              type="file"
            />
            <Fab
              color="primary"
              size="large"
              component="span"
              aria-label="add"
              className={classes.fab}
            >
              <AddIcon fontSize="large" />
            </Fab>
          </label>
        </div>
      </Container>
    );
  }
}

export default ListDbImages;
