/**
 * @description Component renders content of Image file (png, jpeg ...)
 * @param {String} param0 fileUrl - url of the image file to be presented. In case of local file
 * the valus submitted should be created by URL.createObjectURL(file)
 * @returns none
 */
 function ImgDocument({fileUrl}) {

    return (
        <div className="image">
          <img
            src={fileUrl}
            alt="visualizedimage"
          />
        </div>
      );
}

export default ImgDocument