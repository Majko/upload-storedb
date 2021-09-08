import Typography from "@material-ui/core/Typography";
import { IconButton, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const useStyles = makeStyles({
  upload: {
    marginLeft: "auto",
    marginRight: "auto",
    width:'50%'
  },
});

/**
 *
 * @description Component for picking up files
 * @param {function} setFiles calls funtion provided from upper component with Array of file argument
 * @returns Component
 */
const FileUploader = ({ setFiles }) => {
  const onUpload = (e) => {
    setFiles([...e.target.files]);
  };

  const classes = useStyles();

  return (
    <div>
      <Typography variant="h6">Upload súboru</Typography>
      <Typography variant="body2">
        Vyber pomocou tlačítka, pripadne odfoť
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
              color="primary"
              aria-label="upload picture"
              component="span"
              className={classes.upload} 
            >
              <CloudUploadIcon fontSize="large" />
            </IconButton>
          </label>
        </Tooltip>
      </form>
    </div>
  );
};

export default FileUploader;
