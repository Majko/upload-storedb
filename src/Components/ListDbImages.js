import { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listPictures } from "../graphql/queries";
import { useFetchFile } from "./AWS/useFetchFile";
import VisDocument from "./Visualize/VisDocument";

import { Button, SIZE, SHAPE } from "baseui/button";

/**
 * @description Shows list of all tenants image names from db and renders image for a selected one
 * @param {*} None
 * @returns None
 */
function ListDbImages(props) {
  const [dbFiles, setDbFiles] = useState([]);
  const [fileprops, setFileprops] = useState(null);
  const { fetchFile } = useFetchFile();

  // Get list of all tenant files from DB
  const getDbFiles = async () => {
    // load all group's IdentityIDs (all having same tenant)
    const myFiles = await API.graphql(graphqlOperation(listPictures), {});
    setDbFiles(myFiles.data.listPictures.items);
  };

  const selectImage = async (e, file) => {
    e.preventDefault();
    const { signedUrl, key } = await fetchFile(
      file.file.identityID,
      file.file.key
    );
    setFileprops({ signedUrl, key });
  };

  return (
    <div className="Nieco">
      {/* show list of all files as link */}
      <h1>Group's Images from Db :</h1>
      {dbFiles.map((file) => {
        return (
          <ul key={file.id} onClick={(e) => selectImage(e, file)}>
            <li>
              <a href={file.id}>{file.file.key} </a>
            </li>
          </ul>
        );
      })}
      {/* if a select a file, renders the picture */}
      {fileprops && (
        <VisDocument fileName={fileprops.key} fileUrl={fileprops.signedUrl} />
      )}
      {/* <input type="button" value="nacitaj" onClick={getDbFiles} /> */}
      <Button onClick={getDbFiles} size={SIZE.compact} >
        Nacitaj moje files from db
      </Button>
    </div>
  );
}

export default ListDbImages;
