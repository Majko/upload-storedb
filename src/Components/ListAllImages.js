import { useState } from "react";
import { Storage } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import { listPictures } from "../graphql/queries";

function ListAllImages(props) {
  const userData = props.userData;
  const [images, setImages] = useState([]);
  
  const getImageKeys = async (identityID) => {
    let imageKeys = await Storage.list("", {
      level: "protected",
      identityId: identityID,
    });

    imageKeys = await Promise.all(
      imageKeys.map(async (k) => {
        const signedUrl = await Storage.get(k.key, {
          identityId: identityID
        });
        return signedUrl;
      })
    );
    return imageKeys;
  };

  const getAllImageKeys = async () => {
    // take list from db
    const listMyPictures = await API.graphql(
      graphqlOperation(listPictures),
      {}
    );
    console.log(listMyPictures.data.listPictures.items);

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
    console.log("Merged List output: ", finalKeyArray);
  };

  return (
    <div className="Nieco">
      <h1>Group's  Images :</h1>
      {images.map((image) => {
        return (
          <img
            src={image}
            alt="myimage"
            key={image}
            style={{ width: 300, height: 300 }}
          />
        );
      })}
      <br />
      <input type="button" value="nacitaj" onClick={getAllImageKeys} />
    </div>
  );
}

export default ListAllImages;
