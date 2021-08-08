import { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listPictures } from "../graphql/queries";
import ShowS3Image from "./ShowS3Image";

/**
 * @description Shows list of all tenants image names from db and renders image for a selected one
 * @param {*} None
 * @returns None
 */
function ListDbImages(props) {
  const [dbFiles, setDbFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  // Get list of all tenant files from DB
  const getDbFiles = async () => {
    // load all group's IdentityIDs (all having same tenant)
    const myFiles = await API.graphql(graphqlOperation(listPictures), {});
    setDbFiles(myFiles.data.listPictures.items);
  };

  const selectImage = (e, file) => {
    e.preventDefault();
    setSelectedFile(file);
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
      {selectedFile && (
        <ShowS3Image
          identityID={selectedFile.file.identityID}
          filekey={selectedFile.file.key}
        />
      )}
      <input type="button" value="nacitaj" onClick={getDbFiles} />
    </div>
  );
}

export default ListDbImages;
