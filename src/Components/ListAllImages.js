import { useState, useEffect } from "react";
import { Storage, Auth } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import { listPictures } from "../graphql/queries";

function ListAllImages(props) {
  const [images, setImages] = useState([]);
  const userIdentity = props.userIdentity;

  const fetchFiles = async () => {
    Storage.configure({ level: "protected" });
    let imageKeys = await Storage.list("", {
      level: "protected",
      identityId: userIdentity.id, // moj vlastny identity ID len na test
    });
    console.log(imageKeys);
    // imageKeys = await Promise.all(
    //   imageKeys.map(async (k) => {
    //     const signedUrl = await Storage.get(k.key);
    //     return signedUrl;
    //   })
    // );
    // setImages(imageKeys);
  };

  const readImages = async () => {
    console.log("reading from db");
    try {
      const myimgs = await API.graphql(graphqlOperation(listPictures, {}));
      setImages(myimgs.data.listPictures.items)
      console.log(images);
      return images
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    readImages()
  }, []);

  return (
    <div className="Nieco">
      <h1>All group Dynamo Images :</h1>
      {images.map((image) => {
        return (
          <img
            src={image}
            alt="myimage"
            key={image.id}
            style={{ width: 300, height: 300 }}
          />
        );
      })}
    </div>
  );
}

export default ListAllImages;
