import { useState } from "react";
import UploadImageCard from "./UploadImageCard";
import Typography from "@material-ui/core/Typography";
import {
  Button,
  Container,
  Grid,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { PhotoCamera } from "@material-ui/icons";

const useStyles = makeStyles({
  camera: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 40,
  },
});
/**
 * @description Component uploading file to AWS
 * @param {Object} props userData - data needed to identification, here we need: tenant, IdentityID
 * @returns
 */
function UploadImage({ userData }) {
  // const userData = props.userData;
  const [files, setFiles] = useState(null);
  const classes = useStyles();

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

  const onUpload = (e) => {
    setFiles([...e.target.files]);
  };

  return (
    <div>
      <Typography variant="h6">Upload súboru</Typography>
      <Typography variant="body2">
        Potiahni súbory sem, alebo vyber pomocou tlačítka, pripadne odfoť
      </Typography>
      <form noValidate>
        <input
          accept="image/*, application/pdf"
          style={{ display: "none" }}
          id="contained-button-file"
          type="file"
          multiple
          onChange={onUpload}
        />
        <Tooltip title="Vyber súbor">
          <label htmlFor="contained-button-file">
            <IconButton
              className={classes.camera}
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera fontSize="large" />
            </IconButton>
          </label>
        </Tooltip>
      </form>
      <Container>
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
    </div>
  );
}

export default UploadImage;
