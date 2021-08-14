import { toPng } from "html-to-image";
import { useState } from "react";

/**
 * @description Hook that exports part of HTML Dom (e.g few images together)
 * @param {String} htmlElementId Id of html element to be exorted from final document
 * @returns {Array} [file url after export by the function, function which exports the required html element, ]
 */
function useMultipleImageCollector(htmlElementId) {
    const [dataUrl, setDataUrl] = useState(null);
    /**
     * @description Exports one image only as png for the selected HTML element
     * containing more images, using html-to-image package
     */
    const exportAsPicture = async () => {
      let dataUrl = null
      const data = document.getElementById(htmlElementId);
      try {
        dataUrl = await toPng(data);
        setDataUrl(dataUrl)
      } catch (error) {
        console.error(error);
      }
    };
    return [dataUrl, exportAsPicture]
  }
  export default useMultipleImageCollector