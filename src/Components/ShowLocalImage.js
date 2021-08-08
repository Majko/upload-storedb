import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
// import { Document, Page } from "react-pdf";
import { useState } from "react";

/**
 * @description Component to show under html img tag file provided as paramater
 * @param {file} param0 image file to be be shownn
 * @returns none
 */
function ShowLocalImage({ file }) {
  // needed for pdf
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // check the type of document
  const docType = (filename) => {
    const lastDot = filename.lastIndexOf(".");
    const ext = filename.substring(lastDot + 1);
    return ext;
  };

  const  onDocumentLoadSuccess =({ numPages }) =>{
    setNumPages(numPages);
  }

  const nextPage = (e)=>{
    e.preventDefault()
    setPageNumber((prev)=>{return (prev +1) })
  }

  try {
    const extention = docType(file.name);
    console.log("extention: ", extention);
    if (extention === "pdf") {
      return (
        <div className="image">
          <Document file={URL.createObjectURL(file)} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <button onChange={nextPage} >Next page</button>
        </div>
      );
    } else {
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
    }
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
