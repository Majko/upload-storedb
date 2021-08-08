import { Auth } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { listUserIdentitys } from "./graphql/queries";

/**
 * @description Fetches all user identification details needed for other elements
 * @returns {Object} userDataDetail = {
    myIdentityId: "",
    groupIdentityIds: "",
    tenant: "",
    myGroups: [],
    username: "",
 *
 *Po naplneni to bude nieco ako:
*  groupIdentityIds: Array(2)
*    0: "eu-central-1:cb51182d-37e5-4e28-a469-67e333d4608e"
*    1: "eu-central-1:31abecf5-89a3-4d0c-9129-fb9301639a7b"
*  myGroups: Array(1)
*    0: "company:IBM"
*  myIdentityId: "eu-central-1:cb51182d-37e5-4e28-a469-67e333d4608e"
*  tenant: "company:IBM"
*  username: "uptest2"
 */

const useFetchUserIdentity = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    // set the user attributes to state variable userData
    const fetchUserIdentity = async () => {

      try {
        const userInfo = await Auth.currentUserInfo();
        // Vrati Idnetity object:
        // {
        //   "id": "eu-central-1:31abecf5-89a3-4d0c-9129-fb9301639a7b",
        //   "username": "uptest",
        //   "attributes": {
        //       "sub": "aecb732a-cf99-4702-9a1d-4a658cfba499",
        //       "email_verified": true,
        //       "email": "hornik.marian@gmail.com"
        //   }
        // }
        // get the access token of the signed in user
        const { accessToken } = await Auth.currentSession();
        // get the tenant from the top of the cognito groups list
        const cognitogroups = accessToken.payload["cognito:groups"];
        // each company is formed from "company:" + real_comapny_name, e.g "company:IBM"
        const tenant = cognitogroups.find((element) =>
          element.startsWith("company:")
        );
        // load all group's IdentityIDs (all having same tenant)
        const groupUserIDs = await API.graphql(
          graphqlOperation(listUserIdentitys),
          {}
        );
        // check if my identiy already exists
        const groupIdentityIDs = groupUserIDs.data.listUserIdentitys.items.map(
          (item) => {
            return item.identityID;
          }
        );

        const userData = {
          username: userInfo.username,
          myIdentityId: userInfo.id,
          groupIdentityIds: groupIdentityIDs,
          tenant: tenant,
          myGroups: cognitogroups,
        };
        setData((prevdata) => {
          return { ...prevdata, ...userData };
        });
      } catch (err) {
        console.log(err);
        setError(err)
      }
    };
    //call the async function
    fetchUserIdentity();
    }, []);
    
    
    return [data, error];
  };
export default useFetchUserIdentity;
