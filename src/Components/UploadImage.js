import { API, graphqlOperation } from "aws-amplify";
import { createPicture } from "../graphql/mutations";
import { Storage } from "aws-amplify";
import awsconfig from "../aws-exports";

function UploadImage(props) {
  const userIdentity = props.userIdentity;
  const userSession = props.userSession;
  // get the tenant from the top of the cognito groups list
  const cognitogroups = userSession.payload["cognito:groups"];
  // const tenant = cognitogroups[0];
  // each company is formed from "company:" + real_comapny_name, e.g "company:IBM"
  const tenant =  cognitogroups.find(element => element.startsWith("company:"))
  if (tenant === undefined) {
    console.log('Tenant is undefined!!!');
    return
  }
  console.log(tenant);

  console.log(props);

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
        tenant:tenant,
        file: {
          bucket: awsconfig.aws_user_files_s3_bucket,
          region: awsconfig.aws_user_files_s3_bucket_region,
          identityID: userIdentity.id,
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
