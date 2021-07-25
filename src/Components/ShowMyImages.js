import { useState, useEffect } from "react";
import { Storage } from "aws-amplify";

function ShowMyImages(props) {
  const [images, setImages] = useState([]);

  const fetchFiles = async () => {
    Storage.configure({ level: "protected" });
    let imageKeys = await Storage.list("");
    // console.log(imageKeys);

    imageKeys = await Promise.all(
      imageKeys.map(async (k) => {
        const signedUrl = await Storage.get(k.key);
        return signedUrl;
      })
    );
    setImages(imageKeys);
    console.log("Only my list output: ", imageKeys);
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div className="Nieco">
      <h1>S3 Images :</h1>
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

export default ShowMyImages;
