import { Storage } from "aws-amplify";

/**
 * @description Custom hook which uploads file from AWS
 * @param {File} file AWS loacl file to  be uploaded
 * @returns {uploadFile} function that uploads the file
 */
export const useUploadFile = (name ,file) => {
  //"protected" conf means that only owner can write, but everybody (who has Url) can read
  Storage.configure({ level: "protected" });
/**
 * 
 * @param {String} name 
 * @param {File} file 
 * @returns name
 */
  const uploadFile = async (name, file) => {
    let result = null;
    try {
      result = await Storage.put(name, file, {
        level: "protected",
        // with `tagging` the parameters must be URL encoded
        // tagging: new URLSearchParams({ file }).toString(),
      });
    } catch (error) {
      console.error(error);
    }
    return result;
  };
  return { uploadFile };
};
