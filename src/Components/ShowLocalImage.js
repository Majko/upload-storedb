/**
 * @description Component to show under html img tag file provided as paramater
 * @param {file} param0 image file to be be shownn
 * @returns none
 */
function ShowLocalImage({ file }) {
  try {
    return (
      <div className="image">
        <img
          src={URL.createObjectURL(file)}
          alt="inb"
          width="700"
          height="900"
        />
      </div>
    );
  } catch (error) {
    return (
      <>
        <h3>Error n ShowImage encountered</h3>
        <div>{error.message}</div>
      </>
    );
  }
}
export default ShowLocalImage;
