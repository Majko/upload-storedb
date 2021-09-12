import DocListAddDialog from "./DocListAddDialog";

const DocList = ({ children, title }) => {
  return (
    <>
      <h2>{title}</h2>
      {children}
      <DocListAddDialog>
        <p>moj dialoooog</p>
      </DocListAddDialog>
    </>
  );
};

export default DocList;
