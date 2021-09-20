import { useState } from "react";
import VisDocument from "./VisDocument";

function VisFileSelect({ }) {
  const [file, setFile] = useState(null)


  // function that on button click sotres the file to AWS storage and saves info to DB as well
  const onChange = async (e) => {
    const file = e.target.files[0];
    setFile(file)
  };

  return (
    <div className="Nieco">
      <h1>File upload</h1>
      <input type="file"
        accept="image/png, image/gif, image/jpeg"
        onChange={onChange} />
      {file && <VisDocument fileName={file.name} fileUrl={URL.createObjectURL(file)} />}
    </div>
  );
}

export default VisFileSelect;