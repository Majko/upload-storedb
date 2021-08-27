import { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listPictures } from "../graphql/queries";
import { deletePicture} from "../graphql/mutations";

import { useFetchFile } from "./AWS/useFetchFile";
import VisDocument from "./Visualize/VisDocument";

import { Button, SIZE, SHAPE } from "baseui/button";
import { useRemoveFile } from "./AWS/removeFile";

/**
 * @description Shows list of all tenants image names from db and renders image for a selected one
 * @param {*} None
 * @returns None
 */
function ListDbImages(props) {
  const [dbFiles, setDbFiles] = useState([]);
  const [fileprops, setFileprops] = useState(null);
  const { fetchFile } = useFetchFile();
  const { removeFile } = useRemoveFile();

  // Get list of all tenant files from DB
  const getDbFiles = async () => {
    // load all group's IdentityIDs (all having same tenant)
    const myFiles = await API.graphql(graphqlOperation(listPictures), {});
    setDbFiles(myFiles.data.listPictures.items);
  };


  const deleteImageFromDB = async (id)=>{
    try {
      await API.graphql(graphqlOperation(deletePicture, { input: {id:id} }));
    } catch (error) {
      console.log(error);
    }
  }


  const selectImage = async (e, file) => {
    e.preventDefault();
    const { signedUrl, key } = await fetchFile(
      file.file.identityID,
      file.file.key
    );
    setFileprops({ signedUrl, key });
  };

  const onRemove = async (filename, id) => {
    try {
      setFileprops(null);
      // try {
      //   removeFile(filename);
      // } catch (error) {
      //     throw Error('Error deleting file'  )    
      // }
      deleteImageFromDB(id)
      const indexToRemove = dbFiles.findIndex((element)=>{ return (element.id === id)})
      dbFiles.splice(indexToRemove,1)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Nieco">
      {/* show list of all files as link */}
      <h1>Group's Images from Db :</h1>
      {dbFiles.map((file) => {
        return (
          <ul key={file.id} >
            <li>
              <a href={file.id} onClick={(e) => selectImage(e, file)}>
                {file.file.key} : {file.name}
                </a>
              <Button onClick={(e) => onRemove(file.file.key,file.id )}>
                Delete from DB
              </Button>
            </li>
          </ul>
        );
      })}
      {/* if a select a file, renders the picture */}
      {fileprops && (
        <VisDocument fileName={fileprops.key} fileUrl={fileprops.signedUrl} />
      )}
      {/* <input type="button" value="nacitaj" onClick={getDbFiles} /> */}
      <Button onClick={getDbFiles} size={SIZE.compact}>
        Nacitaj moje files from db
      </Button>
    </div>
  );
}

export default ListDbImages;
