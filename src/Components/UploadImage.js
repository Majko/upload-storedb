import { API, graphqlOperation } from "aws-amplify";
import { createPicture } from "../graphql/mutations";
import { Storage } from "aws-amplify";
import awsconfig from "../aws-exports";
import ShowLocalImage from "./ShowLocalImage";
import { useState } from "react";

/**
 * @description Component uploading file to AWS
 * @param {Object} props userData - data needed to identification, here we need: tenant, IdentityID
 * @returns 
 */
function UploadImage({userData}) {
  // const userData = props.userData;
  const [file, setFile] = useState(null)
  
  // function to stored the file info to DB
  const addImageToDB = async (image) => {
    try {
      await API.graphql(graphqlOperation(createPicture, { input: image }));
    } catch (error) {
      console.log(error);
    }
  };
  // function that on button click sotres the file to AWS storage and saves info to DB as well
  const onChange = async (e) => {
    const file = e.target.files[0];
    setFile(file)
    try {
      const result = await Storage.put(file.name, file, {
        level: "protected",
        contentType: "image/png",
        // with `tagging` the parameters must be URL encoded
        // tagging: new URLSearchParams({ file }).toString(),
      });
      // Info we want to store to DB
      const image = {
        tenant:userData.tenant,
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
  };

  return (
    <div className="Nieco">
      <h1>File upload</h1>
      <input type="file" onChange={onChange} />
      <ShowLocalImage file={file} />
    </div>
  );
}

export default UploadImage;
