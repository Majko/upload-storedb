import { API, graphqlOperation } from "aws-amplify";
import { createPicture } from "../graphql/mutations";
import { Storage } from "aws-amplify";
import awsconfig from "../aws-exports";

function UploadImage(props) {
  const userData = props.userData;
  
  const addImageToDB = async (image) => {
    console.log("addimage to db");
    console.log(image);
    try {
      await API.graphql(graphqlOperation(createPicture, { input: image }));
    } catch (error) {
      console.log(error);
    }
  };
  // "The variables input contains a field name 'identityID' that is not defined for input object type 'S3ObjectInput' "
  const onChange = async (e) => {
    let result = "";
    const file = e.target.files[0];
    try {
      result = await Storage.put(file.name, file, {
        level: "protected",
        contentType: "image/png",
        // with `tagging` the parameters must be URL encoded
        // tagging: new URLSearchParams({ file }).toString(),
      });
      console.log(result);

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
    </div>
  );
}

export default UploadImage;
