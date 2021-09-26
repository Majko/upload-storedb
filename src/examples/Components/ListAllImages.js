import { useState } from "react";
import { Storage } from "aws-amplify";
import VisDocument from "../../lib/visualize/VisDocument";

/**
 * @description Reads lists of all identity IDs under surrent tenant, shows all images
 * @param {Object} props UserData - data needed for identification, here we need:groupIdentityIds
 * @returns None
 */
function ListAllImages({userData}) {
  const [images, setImages] = useState([]);

  // function returns list of all SignedUrls for given IdentityID
  const getImageKeys = async (identityID) => {
    let imageKeys = await Storage.list("", {
      level: "protected",
      identityId: identityID,
    });

    imageKeys = await Promise.all(
      imageKeys.map(async (k) => {
        const signedUrl = await Storage.get(k.key, {
          level: "protected",
          identityId: identityID,
        });
        const fileName = k.key;
        return { fileName: fileName, fileUrl: signedUrl };
      })
    );
    return imageKeys;
  };
  // Function that returns list of all group Identity IDs
  const getAllImageKeys = async () => {
    let allKeys = await Promise.all(
      userData.groupIdentityIds.map(async (identity) => {
        return await getImageKeys(identity); //vrati pole s polami pictures pre kazdu IdentityID
      })
    );
    let finalKeyArray = [];
    allKeys.forEach((keyArray) => {
      finalKeyArray = finalKeyArray.concat(keyArray);
    });
    setImages(finalKeyArray);
  };

  return (
    <div className="Nieco">
      <h1>Group's Images :</h1>
      {images.map((image) => {
        return (
          <VisDocument
            fileUrl={image.fileUrl}
            fileName={image.fileName}
            key={image.fileName}
          />
        );
      })}
      <br />
      <input type="button" value="nacitaj" onClick={getAllImageKeys} />
    </div>
  );
}

export default ListAllImages;
