import { useState, useEffect } from "react";
import { Storage } from "aws-amplify";
import VisDocument from "./Visualize/VisDocument";
import { useRemoveFile } from "./AWS/removeFile";
import { useFetchFile } from "./AWS/useFetchFile";
import { Button } from "@material-ui/core";

/**
 * @description Shows all my files on my bucket
 * @param None
 * @returns None
 */
function ListMyImages(props) {
  const [images, setImages] = useState([]);
  const [fileprops, setFileprops] = useState(null);
  const { removeFile } = useRemoveFile();
  const { fetchFile } = useFetchFile();

  const fetchFiles = async () => {
    Storage.configure({ level: "protected" });
    // Get list of keys
    let imageKeys = await Storage.list("");
    // From list of keys get a list of signed Urls
    imageKeys = await Promise.all(
      imageKeys.map(async (k) => {
        const signedUrl = await Storage.get(k.key);
        const name = k.key;
        return { fileName: name, signedUrl: signedUrl };
      })
    );
    setImages(imageKeys);
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const selectImage = async (e, file) => {
    e.preventDefault();
    const { signedUrl, key } = await fetchFile(
      null,
      file.fileName
    );
    setFileprops({ signedUrl, key });
  };

  const onRemove = async (filename) => {
    try {
      setFileprops(null);
      try {
        removeFile(filename);
      } catch (error) {
          throw Error('Error deleting file'  )    
      }
      const indexToRemove = images.findIndex((element)=>{ return (element.fileName === filename)})
      let newImages = images
      newImages.splice(indexToRemove,1)
      setImages([...newImages])
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Nieco">
      <h1>My (only)S3 Images list:</h1>
      <ul>
        {images.map((image) => {
          return (
            <li>
              <a href={image.fileName} onClick={(e) => selectImage(e, image)}>
                {image.fileName}
              </a>
              <Button onClick={(e) => onRemove(image.fileName)}>
                Delete
              </Button>
            </li>
          );
        })}
      </ul>
      {fileprops && (
        <VisDocument fileName={fileprops.filename} fileUrl={fileprops.signedUrl} />
      )}
    </div>
  );
}

export default ListMyImages;
