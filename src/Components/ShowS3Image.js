import { useFetchFile } from "./useFetchFile";

function ShowImage(props) {
  const { signedUrl, error } = useFetchFile(props.identityID, props.filekey);
  return (
    <div className="Nieco">
      <h1>{props.filekey}</h1>
      <img
        src={signedUrl}
        alt="myimage"
        key={signedUrl}
        style={{ width: 300, height: 300 }}
      />
      {error && <h3>{error}</h3>}
    </div>
  );
}

export default ShowImage;
