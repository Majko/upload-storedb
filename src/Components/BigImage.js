import React, { useCallback, useEffect, useRef } from "react";
import { toPng } from "html-to-image";
import { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listPictures } from "../graphql/queries";
import ShowS3Image from "./ShowS3Image";

function BigImage(props) {
  const [dbFiles, setDbFiles] = useState([]);
  const [compositeImage, setcompositeImage] = useState(null);

  useEffect(() => {
    const getDbFiles = async () => {
      // load all group's IdentityIDs (all having same tenant)
      const myFiles = await API.graphql(graphqlOperation(listPictures), {});
      setDbFiles(myFiles.data.listPictures.items);
    };
    getDbFiles();
  }, []);

  const exportAsPicture = async () => {
    var data = document.getElementById("picture");
    try {
      const dataUrl = await toPng(data);
      var img = new Image();
      img.src = dataUrl;
      setcompositeImage(img);
      // document.body.appendChild(img);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {!compositeImage ? (
        <div className="nieco" id="picture">
          <h1>Group's Images from Db :</h1>
          <ul>
            {dbFiles.map((file) => {
              return (
                <li key={file.id}>
                  <a href={file.id}>{file.file.key} </a>
                  {
                    <ShowS3Image
                      identityID={file.file.identityID}
                      filekey={file.file.key}
                    />
                  }
                </li>
              );
            })}
          </ul>
          <input type="button" value="Uloz" onClick={exportAsPicture} />
        </div>
      ) : (
        <div>
          <h1>Generated multipage</h1>
          <img src={compositeImage.src} alt="comp" />) : (
          <h3>"No composite imge generatred yet!"</h3>
        </div>
      )}
    </div>
  );
}

export default BigImage;
