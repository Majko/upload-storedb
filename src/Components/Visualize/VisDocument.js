import ImgDocument from './ImgDocument'
import PdfDocument from './PdfDocument'

/**
 * @description Component renders content of both pdf and image files (png, jpeg, ...)
 * @param {String} param0 fileName - name/key of the file to be presented. 
 * @param {String} param0 fileUrl - url of the image file to be presented. In case of local file
 * the valus submitted should be created by URL.createObjectURL(file)
 * @returns none
 */
function VisDocument({ fileName, fileUrl }) {

    // check the type of document
    const docType = (filename) => {
        const allowedExtentions = ['pdf', 'png', 'jpg', 'jpeg']
        const lastDot = filename.lastIndexOf(".");
        const ext = filename.substring(lastDot + 1);
        //check if extention is among the allowe ones
        if (allowedExtentions.includes(ext))
            return ext;
        else
            throw new Error('File type is not allowed!')
    };

    return (
        (docType(fileName) === 'pdf') ? <PdfDocument fileUrl={fileUrl} /> : <ImgDocument fileUrl={fileUrl} />
    )
}

export default VisDocument