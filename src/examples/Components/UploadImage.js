import { useState } from "react";
import UploadImageCard from "./UploadImageCard";
import FileUploader from "./common/FileUploader";
import { Container, Grid } from "@mui/material";

/**
 * @description Component uploading file to AWS
 * @param {Object} props userData - data needed to identification, here we need: tenant, IdentityID
 * @returns
 */
function UploadImage({ userData }) {
  // const userData = props.userData;
  const [files, setFiles] = useState([]);

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
    <Container>
      <FileUploader setFiles={setFiles} />
      <Grid container spacing={3}>
        {files &&
          files.map((file) => {
            return (
              <Grid item key={file.name} xs={12} md={6}>
                <UploadImageCard
                  userData={userData}
                  file={file}
                  removeHandler={removeFileFromFiles}
                />
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
}

export default UploadImage;
