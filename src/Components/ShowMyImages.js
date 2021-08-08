import { useState, useEffect } from "react";
import { Storage } from "aws-amplify";

/**
 * @description Shows all my files on my bucket
 * @param None
 * @returns None
 */
function ShowMyImages(props) {
  const [images, setImages] = useState([]);

  const fetchFiles = async () => {
    Storage.configure({ level: "protected" });
    // Get list of keys
    let imageKeys = await Storage.list("");
    // From list of keys get a list of signed Urls
    imageKeys = await Promise.all(
      imageKeys.map(async (k) => {
        const signedUrl = await Storage.get(k.key);
        return signedUrl;
      })
    );
    setImages(imageKeys);
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div className="Nieco">
      <h1>My (only)S3 Images :</h1>
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
