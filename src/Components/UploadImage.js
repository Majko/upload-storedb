import { API, graphqlOperation } from "aws-amplify";
import { createPicture } from "../graphql/mutations";
import awsconfig from "../aws-exports";
import { useState } from "react";
import VisDocument from "./Visualize/VisDocument";
import { FileUploader } from "baseui/file-uploader";
import { useUploadFile } from "./AWS/useUploadFile";
import useDocumentType from "./Visualize/useDocumentType";

import { Card, StyledBody, StyledAction } from "baseui/card";
import { Button } from "baseui/button";
import { Input } from "baseui/input";
import { RadioGroup, Radio, ALIGN } from "baseui/radio";
import { useStyletron } from "baseui";

/**
 * @description Component uploading file to AWS
 * @param {Object} props userData - data needed to identification, here we need: tenant, IdentityID
 * @returns
 */
function UploadImage({ userData }) {
  // const userData = props.userData;
  const [files, setFiles] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const { uploadFile } = useUploadFile();
  const [docPurpose, setDocPurpose] = useState("1");
  const [description, setDescription] = useState(null);
  const [css, theme] = useStyletron();

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

  const acceptedFileHandler = (files) => {
    setFiles(files);
    // files.map(async (file) => {
    //   uploadFileToS3(file)
    // });
  };

  const uploadFileToS3 = async (file) => {
    const mydocType = docType(file.name);
    const myname = guid() + "." + mydocType;
    try {
      const result = await uploadFile(myname, file);
      console.log(result);
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
      addImageToDB(image);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={css({ padding: theme.sizing.scale500 })}>
      <h1>File upload</h1>
      <FileUploader
        errorMessage={errorMessage}
        onDrop={(acceptedFiles, rejectedFiles) => {
          acceptedFileHandler(acceptedFiles);
        }}
      />

      {files &&
        files.map((file) => {
          return (
            <div key={file.name}>
              <Card
                overrides={{ Root: { style: { width: "100%" } } }}
                title="Nasnimany orbazok"
              >
                <div className={css({ maxWidth: "2em" })}>
                  <VisDocument
                    fileName={file.name}
                    fileUrl={URL.createObjectURL(file)}
                    overrides={{ Root: { style: { width: "100%" } } }}
                    // width="100%"
                  />
                </div>
                <StyledBody>
                  <RadioGroup
                    value={docPurpose}
                    onChange={(e) => setDocPurpose(e.currentTarget.value)}
                    name="number"
                    align={ALIGN.horizontal}
                  >
                    <Radio value="1">Fakrúra</Radio>
                    <Radio value="2">Interný doklad</Radio>
                    <Radio value="3">Iné</Radio>
                  </RadioGroup>
                  <Input
                    value={description}
                    onChange={(event) =>
                      setDescription(event.currentTarget.value)
                    }
                    clearable
                  />
                </StyledBody>
                <StyledAction>
                  <Button
                    onClick={() => {
                      uploadFileToS3(file);
                    }}
                    overrides={{ BaseButton: { style: { width: "100%" } } }}
                  >
                    Odoslat na spracovanie
                  </Button>
                </StyledAction>
              </Card>
            </div>
          );
        })}
    </div>
  );
}

export default UploadImage;
