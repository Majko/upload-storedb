import { useState } from "react";
import { toPng } from "html-to-image";
import VisDocument from "./Visualize/VisDocument";

/**
 * @description Component that reds image files one by one, after which 
 * it generates one image from the ones read
 * @param {Object} props - No props needed 
 * @returns no
 */
function MultiPageImage(props) {
  const [multiFiles, setMultiFiles] = useState([]);
  const [compositeImageUrl, setCompositeImageUrl] = useState(null);

  /**
   * @description Exports one image only as png for the selected HTML element
   * containing more images, using html-to-image package
   */
  const exportAsPicture = async () => {
    var data = document.getElementById("multipage");
    try {
      const dataUrl = await toPng(data);
      setCompositeImageUrl(dataUrl);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileSelect = (file) => {
    setMultiFiles((prevFiles) => [...prevFiles, file]);
  };

  /**
   * @description Renders either selection of individual image files or One composite 
   * image as composition of previous files
   */
  return (
    <div className="App">
      {!compositeImageUrl ? ( //check if export of big image exists, if not show file selector
        <div id="select">
          <h1>Pick few images and genererate onle file</h1>
          <input
            type="file"
            onChange={(e) => handleFileSelect(e.target.files[0])}
          />
          <button onClick={exportAsPicture}>Generuj dokument</button>
          <div id="multipage">
            {multiFiles.map((file) => (
              <VisDocument fileName={file.name} fileUrl={URL.createObjectURL(file)} />
            ))}
          </div>
        </div>
      ) : ( //if export exists, show one big image 
        <div id="compositepage">
          <img src={compositeImageUrl} alt="compostnyimg" />
        </div>
      )}
    </div>
  );
}

export default MultiPageImage;
