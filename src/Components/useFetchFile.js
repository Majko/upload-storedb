import { Storage } from "aws-amplify";
import { useEffect, useState } from "react";

export const useFetchFile = (identityID, key) => {
  const [signedUrl, setSignedUrl] = useState(null);
  const [error, setError] = useState(null);

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
