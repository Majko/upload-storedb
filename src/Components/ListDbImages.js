import { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listPictures } from "../graphql/queries";
import ShowImage from "./ShowImage";

function ListDbImages(props) {
  const [dbFiles, setDbFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

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

      {selectedFile && (
        <ShowImage
          identityID={selectedFile.file.identityID}
          filekey={selectedFile.file.key}
        />
      )}
      <input type="button" value="nacitaj" onClick={getDbFiles} />
    </div>
  );
}

export default ListDbImages;
