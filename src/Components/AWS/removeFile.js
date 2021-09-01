import { Storage } from "aws-amplify";

/**
 * @description Custom hook which fetches file from AWS
 * @param {String} key File name (key)
 * @returns { Error} Signed Url for  the file returned, error in case if any
 */
export const useRemoveFile = () => {
  //"protected" conf means that only owner can write, but everybody (who has Url) can read
  Storage.configure({ level: "protected" });

  const removeFile = async (key) => {
    try {
      await Storage.remove(key);
    } catch (error) {
      throw error;
    }
  };

  return { removeFile };
};
