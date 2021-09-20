import ImgDocument from "./ImgDocument";
import PdfDocument from "./PdfDocument";
import useDocumentType from "./useDocumentType";

/**
 * @description Component renders content of both pdf and image files (png, jpeg, ...)
 * @param {String} fileName fileName - name/key of the file to be presented.
 * @param {String} fileUrl  - url of the image file to be presented. In case of local file
 * the valus submitted should be created by URL.createObjectURL(file)
 * @returns none
 */
function VisDocument({ fileName, fileUrl, width }) {
  const docType = useDocumentType()

  return docType(fileName) === "pdf" ? (
    <PdfDocument fileUrl={fileUrl} width={width} />
  ) : (
    <ImgDocument fileUrl={fileUrl} width={width} />
  );
}

export default VisDocument;
