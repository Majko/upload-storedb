const ItemShortDetail = ({ item }) => {
  return (
    <>
      <h3>itemized detail</h3>
      <p>{item.name + item.content}</p>
    </>
  );
};

export default ItemShortDetail
