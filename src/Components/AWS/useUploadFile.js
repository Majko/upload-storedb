import { Storage } from "aws-amplify";
import { useState } from "react";

/**
 * @description Custom hook which uploads file from AWS
 * @param {File} file AWS loacl file to  be uploaded
 * @returns {uploadFile} function that uploads the file
 */
export const useUploadFile = (file) => {
  //"protected" conf means that only owner can write, but everybody (who has Url) can read
  Storage.configure({ level: "protected" });
/**
 * 
 * @param {*} file 
 * @returns 
 */
  const uploadFile = async (file) => {
    let result = null;
    try {
      result = await Storage.put(file.name, file, {
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
