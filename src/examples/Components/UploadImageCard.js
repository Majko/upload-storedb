import { API, graphqlOperation } from "aws-amplify";
import { createPicture } from "../../graphql/mutations";
import awsconfig from "../../aws-exports";
import { useState } from "react";
import VisDocument from "../../lib/visualize/VisDocument";
import { useUploadFile } from "../../lib/aws/useUploadFile";
import useDocumentType from "../../lib/visualize/useDocumentType";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import { CardHeader, IconButton } from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";


/**
 * @description Component uploading file to AWS
 * @param {Object} props userData - data needed to identification, here we need: tenant, IdentityID
 * @returns
 */
function UploadImageCard({ userData, file, removeHandler }) {
  // const userData = props.userData;
  const { uploadFile } = useUploadFile();
  const [docPurpose, setDocPurpose] = useState("1");
  const [description, setDescription] = useState("");

  const docType = useDocumentType();

  // function to stored the file info to DB
  const addImageToDB = async (image) => {
    try {
      await API.graphql(graphqlOperation(createPicture, { input: image }));
    } catch (error) {
      console.log(error);
    }
  };

  const guid = () => {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return (
      s4() +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      s4() +
      s4()
    );
  };

  const uploadFileToS3 = async (file) => {
    const mydocType = docType(file.name);
    const myname = guid() + "." + mydocType;
    try {
      await uploadFile(myname, file);
      // Info we want to store to DB
      const image = {
        tenant: userData.tenant,
        name: file.name,
        description: description,
        file: {
          bucket: awsconfig.aws_user_files_s3_bucket,
          region: awsconfig.aws_user_files_s3_bucket_region,
          identityID: userData.myIdentityId,
          key: myname,
        },
      };
      console.log(image);
      addImageToDB(image);
      removeHandler(file);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card>
      <CardHeader
        action={
          <IconButton
            onClick={() => {
              removeHandler(file);
            }}
            size="large">
            <DeleteOutlined />
          </IconButton>
        }
        title={file.name}
      />

      <CardActionArea>
        <CardMedia>
          <VisDocument
            fileName={file.name}
            fileUrl={URL.createObjectURL(file)}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Detaily súboru
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Zadajte použitie dokumentu a popis, ktorý Vám pomúče s jeho ďalšou
            identifikáciou
          </Typography>
          <br />
          <form>
            <FormControl component="fieldset">
              <FormLabel component="legend">Použitie</FormLabel>
              <RadioGroup
                aria-label="Použitie"
                name="purpose"
                value={docPurpose}
                onChange={(e) => setDocPurpose(e.currentTarget.value)}
              >
                <FormControlLabel
                  value="invoice"
                  control={<Radio />}
                  label="Faktúra"
                />
                <FormControlLabel
                  value="internal"
                  control={<Radio />}
                  label="Interný doklad"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Iné.."
                />
              </RadioGroup>
              <TextField
                id="descinput"
                label="Popis"
                variant="outlined"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </FormControl>
          </form>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            uploadFileToS3(file);
          }}
        >
          Odoslať na spracovanie
        </Button>
        <Button
          size="small"
          color="secondary"
          onClick={() => {
            removeHandler(file);
          }}
        >
          Zrušiť
        </Button>
      </CardActions>
    </Card>
  );
}

export default UploadImageCard;
