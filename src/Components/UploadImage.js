import { useState } from "react";
// import { FileUploader } from "baseui/file-uploader";
import { useStyletron } from "baseui";
import UploadImageCard from "./UploadImageCard";
// import { Label4, Paragraph4 } from "baseui/typography";
import Typography from "@material-ui/core/Typography";

import { Button } from "@material-ui/core";

/**
 * @description Component uploading file to AWS
 * @param {Object} props userData - data needed to identification, here we need: tenant, IdentityID
 * @returns
 */
function UploadImage({ userData }) {
  // const userData = props.userData;
  const [files, setFiles] = useState(null);
  const [css, theme] = useStyletron();

  const acceptedFileHandler = (files) => {
    setFiles(files);
    // files.map(async (file) => {
    //   uploadFileToS3(file)
    // });
  };

  const removeFileFromFiles = (file) => {
    const indexToRemove = files.findIndex((element) => {
      return element.name === file.name;
    });
    if (indexToRemove > -1) {
      let newImages = files;
      newImages.splice(indexToRemove, 1);
      setFiles([...newImages]);
    }
  };

  return (
    <div className={css({ padding: theme.sizing.scale500 })}>
      <Typography variant="h6" >Upload súboru</Typography>
      <Typography variant="body2" >
        Potiahni súbory sem, alebo vyber pomocou tlačítka, pripadne odfoť
      </Typography>

      <input
        style={{ display: "none" }}
        id="contained-button-file"
        type="file"
        accept="image/*"
        multiple
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span" >
          Upload
        </Button>
      </label>
      {/* <FileUploader
        accept="image/*"
        multiple
        // errorMessage="Chyba pri uploade"
        onDrop={(acceptedFiles, rejectedFiles) => {
          acceptedFileHandler(acceptedFiles);
        }}
      /> */}

      {files &&
        files.map((file) => {
          return (
            <div key={file.name}>
              <UploadImageCard
                userData={userData}
                file={file}
                removeHandler={removeFileFromFiles}
              />
            </div>
          );
        })}
    </div>
  );
}

export default UploadImage;
