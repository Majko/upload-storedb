import { Storage } from "aws-amplify";
import { useEffect, useState } from "react";

export const useFetchFile = (identityID, key) => {
  const [signedUrl, setSignedUrl] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchFile = async () => {
      try {
        Storage.configure({ level: "protected" });
        const signedUrl = await Storage.get(key, {
          identityId: identityID,
        });
        setSignedUrl(signedUrl);
      } catch (error) {
        setError(error);
      }
    };
    fetchFile();
  }, []);
  return { signedUrl, error };
};
