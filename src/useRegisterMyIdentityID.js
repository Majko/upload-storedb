import { API, graphqlOperation } from "aws-amplify";
import { useEffect } from "react";
import { createUserIdentity } from "./graphql/mutations";

/**
 * @description Function checks upon an appalication start whether I am already register in a DB, if not,
 * a new registration is made
 * @param {String} myUserIdentityId My AWS IdentityID
 * @param {String} groupIdentityIDs All group's members (tenant) IdentityIDs
 * @param {*String tenant My tenant - all comapanies users collected under a tenant
 */
const useRegisterMyIdentityID = (
  myUserIdentityId,
  groupIdentityIDs,
  tenant
) => {
  useEffect(() => {
    const fetchIdentity = async () => {
      // check if my identiy already exists in the DB
      if (groupIdentityIDs.indexOf(myUserIdentityId) === -1) {
        // if it doesnt, enter it into the db
        console.log("add user to db");
        const user = {
          tenant: tenant,
          identityID: myUserIdentityId,
        };

        try {
          await API.graphql(
            graphqlOperation(createUserIdentity, { input: user })
          );
        } catch (error) {
          console.log(error);
        }
      }
    };
    if (groupIdentityIDs) {
      fetchIdentity();
    }
  }, [groupIdentityIDs, myUserIdentityId, tenant]);
};
export default useRegisterMyIdentityID;
