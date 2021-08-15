import { Storage } from "aws-amplify";
import { useState } from "react";

/**
 * @description Custom hook which fetches file from AWS
 * @param {String} identityID AWS Identity ID, collected from token
 * @param {String} key File name (key)
 * @returns {Url, Error} Signed Url for  the file returned, error in case if any
 */
export const useFetchFile = () => {
  //"protected" conf means that only owner can write, but everybody (who has Url) can read
  Storage.configure({ level: "protected" });

  const fetchFile = async (identityID, key) => {
    try {
      const signedUrl = await Storage.get(key, {
        identityId: identityID,
      });
      return { signedUrl, key };
    } catch (error) {
      console.error(error);
    }
  };

  return { fetchFile };
}
