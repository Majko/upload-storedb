import { useState, useEffect } from "react";
import { Storage } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import { listUserIdentitys } from "../graphql/queries";
import { createUserIdentity } from "../graphql/mutations";

function ListAllImages(props) {
  const [images, setImages] = useState([]);
  const [identityIDs, setIdentityIDs] = useState([]);
  const userIdentity = props.userIdentity;
  const userSession = props.userSession;
  // get the tenant from the top of the cognito groups list
  const cognitogroups = userSession.payload["cognito:groups"];
  // each company is formed from "company:" + real_comapny_name, e.g "company:IBM"
  const tenant = cognitogroups.find((element) =>
    element.startsWith("company:")
  );
  if (tenant === undefined) {
    console.log("Tenant is undefined!!!");
    // return;
  } else console.log("Tenant is: ", tenant);

  const registerMyIdentityId = async () => {
    // load all group's IdentityIDs
    const groupUserIDs = await API.graphql(
      graphqlOperation(listUserIdentitys),
      {}
    );
    // const myIdentityID = await API.graphql(
    //   graphqlOperation(listUserIdentitys),
    //   {
    //     filter: {
    //       identityID: {
    //         eq: "eu-central-1:31abecf5-89a3-4d0c-9129-fb9301639a7b",
    //       },
    //     },
    //   }
    // );
    // console.log(groupUserIDs.data.listUserIdentitys.items);
    // check if my identiy already exists
    const groupIdentityIDs = groupUserIDs.data.listUserIdentitys.items.map(
      (item) => {
        return item.identityID;
      }
    );
    setIdentityIDs(groupIdentityIDs);
    console.log(groupIdentityIDs);
    //my ID not in the array
    if (groupIdentityIDs.indexOf(userIdentity.id) === -1) {
      // if it doesnt, enter it into the db
      console.log("add userto db");
      const user = {
        tenant: tenant,
        identityID: userIdentity.id,
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

  const getImageKeys = async (identityID) => {
    let imageKeys = await Storage.list("", {
      level: "protected",
      identityId: identityID,
    });

    imageKeys = await Promise.all(
      imageKeys.map(async (k) => {
        const signedUrl = await Storage.get(k.key, {
          identityId: identityID
        });
        return signedUrl;
      })
    );
    return imageKeys;
  };

  const getAllImageKeys = async () => {
    let allKeys = await Promise.all(
      identityIDs.map(async (identity) => {
        return await getImageKeys(identity); //vrati pole s polami pictures pre kazdu IdentityID
      })
    );
    let finalKeyArray = [];
    allKeys.forEach((keyArray) => {
      finalKeyArray = finalKeyArray.concat(keyArray);
    });
    setImages(finalKeyArray);
    console.log("Merged List output: ", finalKeyArray);
  };

  useEffect(() => {
    registerMyIdentityId();
  }, []);

  return (
    <div className="Nieco">
      <h1>All group Dynamo Images :</h1>
      {images.map((image) => {
        // console.log(image);
        return (
          <img
            // src={image.file.key}
            src={image}
            alt="myimage"
            key={image}
            style={{ width: 300, height: 300 }}
          />
        );
      })}
      <br />
      <input type="button" value="nacitaj" onClick={getAllImageKeys} />
    </div>
  );
}

export default ListAllImages;
