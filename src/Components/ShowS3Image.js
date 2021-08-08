import { useFetchFile } from "./useFetchFile";
/**
 * @description Component to show under html img tag file provided as paramater
 * @param {file} param0 image file to be be shownn
 * @returns none
 */
function ShowImage(props) {
  // uses useFetchFile hook
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
