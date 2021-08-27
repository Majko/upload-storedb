import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { useEffect, useState } from "react";

/**
 * @description Component renders content of PDF file (.pdf). Allows pagination.
 * @param {String} param0 fileUrl - url of the image file to be presented. In case of local file
 * the valus submitted should be created by URL.createObjectURL(file)
 * @returns none
 */
function PdfDocument({ fileUrl, width }) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(()=>{
        setPageNumber(1)
    },[fileUrl])

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    const nextPage = (e) => {
        e.preventDefault()
        setPageNumber((prev) => { return ((prev < numPages) ? (prev + 1) : prev) })
    }

    const previousPage = (e) => {
        e.preventDefault()
        setPageNumber((prev) => { return ((prev > 0) ? (prev - 1) : prev) })
    }

    return (
        <div className="image">
            <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess} >
                <Page pageNumber={pageNumber} width={width} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
            {(pageNumber > 1) && <button onClick={previousPage} >Previous page</button>}
            {(pageNumber < numPages) && <button onClick={nextPage} >Next page</button>}
        </div>
    );
}

export default PdfDocument