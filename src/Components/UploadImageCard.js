import { API, graphqlOperation } from "aws-amplify";
import { createPicture } from "../graphql/mutations";
import awsconfig from "../aws-exports";
import { useState } from "react";
import VisDocument from "../lib/visualize/VisDocument";
import { useUploadFile } from "../lib/aws/useUploadFile";
import useDocumentType from "../lib/visualize/useDocumentType";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import { CardHeader, IconButton } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";


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
          >
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
