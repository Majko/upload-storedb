import Typography from "@material-ui/core/Typography";
import { PhotoCamera } from "@material-ui/icons";
import {
  IconButton,
  Tooltip,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  camera: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 40,
  },
});
/**
 * 
 * @description Component for picking up files
 * @param {function} setFiles calls funtion provided from upper component with Array of file argument 
 * @returns Component
 */
 const FileUploader = ({setFiles}) => {
    const classes = useStyles();
  
    const onUpload = (e) => {
      setFiles([...e.target.files]);
    };
  
    return (
      <>
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
      </>
    );
  };

  export default FileUploader
  