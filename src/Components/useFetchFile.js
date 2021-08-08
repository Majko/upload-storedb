import { Storage } from "aws-amplify";
import { useState } from "react";

/**
 * @description Custom hook which fetches file from AWS
 * @param {String} identityID AWS Identity ID, collected from token
 * @param {String} key File name (key)
 * @returns {Url, Error} Signed Url for  the file returned, error in case if any
 */
export const useFetchFile = (identityID, key) => {
  const [signedUrl, setSignedUrl] = useState(null);
  const [error, setError] = useState(null);

  //"protected" conf means that only owner can write, but everybody (who has Url) can read
  Storage.configure({ level: "protected" });
  const fetchFile = async () => {
    try {
      const signedUrl = await Storage.get(key, {
        identityId: identityID,
      });
      setSignedUrl(signedUrl);
    } catch (error) {
      setError(error);
      console.error(error);
    }
  };
  fetchFile();
  return { signedUrl, error };
};
