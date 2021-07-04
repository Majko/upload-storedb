import { useState, useEffect } from "react";
import { Storage, Auth } from "aws-amplify";

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

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div className="Nieco">
      <h1>All group Dynamo Images :</h1>
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
    </div>
  );
}

export default ListAllImages;
