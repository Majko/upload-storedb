import React, { useCallback, useEffect, useRef } from "react";
import { toPng } from "html-to-image";
import { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listPictures } from "../graphql/queries";
import ShowImage from "./ShowImage";

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
    <div className="nieco" id="picture">
      <h1>Group's Images from Db :</h1>
      <ul>
        {!compositeImage &&
          dbFiles.map((file) => {
            return (
              <li key={file.id}>
                <a href={file.id}>{file.file.key} </a>
                {
                  <ShowImage
                    identityID={file.file.identityID}
                    filekey={file.file.key}
                  />
                }
              </li>
            );
          })}
      </ul>
      <input type="button" value="Uloz" onClick={exportAsPicture} />

      {compositeImage ? (
        <img src={compositeImage.src} alt="comp" />
      ) : (
        "No composite imge generatred yet!"
      )}
    </div>
  );
}

export default BigImage;
