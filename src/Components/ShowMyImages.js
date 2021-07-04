import { useState, useEffect } from "react";
import { Storage } from "aws-amplify";

function ShowMyImages(props) {
  const [images, setImages] = useState([]);

  const fetchFiles = async () => {
    Storage.configure({ level: "protected" });
    let imageKeys = await Storage.list("");
    console.log(imageKeys);

    // imageKeys = await Promise.all(
    //   imageKeys.map(async (k) => {
    //     const signedUrl = await Storage.get(k.key);
    //     return signedUrl;
    //   })
    // );
    // setImages(imageKeys);
  };

  useEffect(() => {
    // set the user attributes to state variable cognitoUser
    // const fetchAndSaveAccessToken = async () => {
    // const user = await Auth.currentAuthenticatedUser();
    // setCognitoUser(user);
    // console.log(user);
    // //subscribe for changes in images
    // let subscription;
    // subscription = API.graphql(
    //   // musim pridat owner, je to hack, inak dava Amplify chybu
    //   graphqlOperation(subscriptions.onCreatePicture, {
    //     owner: user.username,
    //   })
    // ).subscribe({
    //   // upon each new file fetch the files again
    //   next: ({ provider, value }) => {
    //     fetchFiles();
    //   },
    //   error: (error) => console.log(error),
    // });
    // //returns function that will run when the component dies
    // return function cleanup() {
    //   subscription.unsubscribe();
    // };
    // };
    // fetchAndSaveAccessToken();
    fetchFiles();
  }, []);

  return (
    <div className="Nieco">
      <h1>S3 Images :</h1>
      {images.map((image) => {
        return (
          <img
            src={image}
            alt="myimage"
            key={image}
            style={{ width: 300, height: 300 }}
          />
        );
      })}
    </div>
  );
}

export default ShowMyImages;
