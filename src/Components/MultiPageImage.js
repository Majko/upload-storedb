import { useState } from "react";
import { toPng } from "html-to-image";
import ShowLocalImage from "./ShowLocalImage";

function MultiPageImage(props) {
  const [name, setName] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [compositeImage, setCompositeImage] = useState(null);

  const exportAsPicture = async (e) => {
    e.preventDefault();
    var data = document.getElementById("multipage");
    try {
      const dataUrl = await toPng(data);
      var img = new Image();
      img.src = dataUrl;
      setCompositeImage(img);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileSelect = (file) => {
    let filesArray = selectedFiles;
    filesArray.push(file);
    setSelectedFiles(filesArray);
  };

  return (
    <div className="App">
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input 
          type="file"
          // value={selectedFile}
          onChange={(e) => handleFileSelect(e.target.files[0])}
        />
        <input type="submit" onChange={exportAsPicture} />
      </form> 
        <div id="multipage"> 
        
          {(selectedFiles.isArray & selectedFiles.length) &&
            selectedFiles.map((file) => {
              // return <ShowLocalImage file={file} key={file.lastModified} />;
              return (
                <div className="image">
                <img
                  src={URL.createObjectURL(file)}
                  alt="inb"
                  width="500"
                  height="600"
                />
              </div>
              )
            })}
        </div>
    </div>
  );
}

export default MultiPageImage;
