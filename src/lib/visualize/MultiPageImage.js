import { useState } from "react";
import VisDocument from "./VisDocument";
import useMultipleImageCollector from './useMultipleImageCollector'

/**
 * @description Component that reds image files one by one, after which 
 * it generates one image from the ones read
 * @returns no
 */
function MultiPageImage() {
  const [multiFiles, setMultiFiles] = useState([]);
  const [dataUrl, exportPic] = useMultipleImageCollector("multipage")

  const handleFileSelect = (file) => {
    setMultiFiles((prevFiles) => [...prevFiles, file]);
  };

  /**
   * @description Renders either selection of individual image files or One composite 
   * image as composition of previous files
   */
  return (
    <div className="App">
      {!dataUrl ? ( //check if export of big image exists, if not show file selector
        <div id="select">
          <h1>Pick few images and genererate onle file</h1>
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg"
            onChange={(e) => handleFileSelect(e.target.files[0])}
          />
          <button onClick={(e) => exportPic("multipage")}>Generuj dokument</button>
          <div id="multipage">
            {multiFiles.map((file) => (
              <VisDocument fileName={file.name} fileUrl={URL.createObjectURL(file)} />
            ))}
          </div>
        </div>
      ) : ( //if export exists, show one big image 
        <div id="compositepage">
          {dataUrl && <img src={dataUrl} alt="compostnyimg" />}
        </div>
      )}
    </div>
  );
}

export default MultiPageImage;