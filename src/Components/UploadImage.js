import { API, graphqlOperation } from "aws-amplify";
import { createPicture } from "../graphql/mutations";
import awsconfig from "../aws-exports";
import { useState } from "react";
import VisDocument from "./Visualize/VisDocument";
import { FileUploader } from "baseui/file-uploader";
import { useUploadFile } from "./AWS/useUploadFile";

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

  // function to stored the file info to DB
  const addImageToDB = async (image) => {
    try {
      await API.graphql(graphqlOperation(createPicture, { input: image }));
    } catch (error) {
      console.log(error);
    }
  };

  const acceptedFileHandler = (files) => {
    setFiles(files);
    files.map(async (file) => {
      try {
        const result = await uploadFile(file);
        console.log(result);
        // Info we want to store to DB
        const image = {
          tenant: userData.tenant,
          file: {
            bucket: awsconfig.aws_user_files_s3_bucket,
            region: awsconfig.aws_user_files_s3_bucket_region,
            identityID: userData.myIdentityId,
            key: file.name,
          },
        };
        addImageToDB(image);
      } catch (error) {
        console.error(error);
      }
    });
  };

  return (
    <div className="Nieco">
      <h1>File upload</h1>
      <FileUploader
        errorMessage={errorMessage}
        onDrop={(acceptedFiles, rejectedFiles) => {
          acceptedFileHandler(acceptedFiles);
        }}
      />
      ;
      {files &&
        files.map((file) => {
          return (
            <div key={file.name}>
              <VisDocument
                fileName={file.name}
                fileUrl={URL.createObjectURL(file)}
              />
            </div>
          );
        })}
    </div>
  );
}

export default UploadImage;
