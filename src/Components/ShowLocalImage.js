function ShowLocalImage(props) {
  const file = props.file
  console.log(file);
  return (
    <div className="image">
      <img
        src={URL.createObjectURL(file)}
        alt="inb"
        width="500"
        height="600"
      />
    </div>
  );
}
export default ShowLocalImage;
