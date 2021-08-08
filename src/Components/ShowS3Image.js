import { useFetchFile } from "./useFetchFile";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { useState } from "react";


/**
 * @description Component to show under html img tag file provided as paramater
 * @param {file} param0 image file to be be shownn
 * @returns none
 */
function ShowImage(props) {
  // needed for pdf
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // check the type of document
  const docType = (filename) => {
    const lastDot = filename.lastIndexOf(".");
    const ext = filename.substring(lastDot + 1);
    return ext;
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const nextPage = (e)=>{
    e.preventDefault()
    setPageNumber((prev)=>{return (prev +1) })
  }

  // uses useFetchFile hook
  const { signedUrl, error } = useFetchFile(props.identityID, props.filekey);
  const extention = docType(props.filekey);
  console.log("extention: ", extention);
  if (extention === "pdf") {
    return (
      <div className="image">
        <Document
          file={signedUrl}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <button onChange={nextPage}>Next page</button>
      </div>
    );
  } else {
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
}

export default ShowImage;
