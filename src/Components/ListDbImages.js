import { useState } from "react";
import { Storage } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import { listPictures } from "../graphql/queries";
import ShowImage from "./ShowImage";

function ListDbImages(props) {
  const [dbFiles, setDbFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [show, setShow] = useState(false);

  const getDbFiles = async () => {
    // load all group's IdentityIDs (all having same tenant)
    const myFiles = await API.graphql(graphqlOperation(listPictures), {});
    setDbFiles(myFiles.data.listPictures.items);
    console.log(myFiles.data.listPictures.items);
  };

  const selectImage = (e, file) => {
    e.preventDefault();
    setSelectedFile(file);
    showPicture();
  };

  const showPicture = () => {
    setShow(!show);
    console.log(show);
  };

  return (
    <div className="Nieco">
      <h1>Group's Images from Db :</h1>
      {dbFiles.map((file) => {
        return (
          <div>
            <ul key={file.id} onClick={(e) => selectImage(e, file)}>
              <li>
                <a href={file.id}>{file.file.key} </a>
              </li>
            </ul>
          </div>
        );
      })}
      {show && (
        <ShowImage
          identityID={selectedFile.file.identityID}
          filekey={selectedFile.file.key}
          onClick={() => showPicture}
        />
      )}
      <input type="button" value="nacitaj" onClick={getDbFiles} />
    </div>
  );
}

export default ListDbImages;
