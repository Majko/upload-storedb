const useDocumentType = () => {
  const documentType = (filename) => {
    const allowedExtentions = ["pdf", "png", "jpg", "jpeg"];
    const lastDot = filename.lastIndexOf(".");
    const ext = filename.substring(lastDot + 1);
    //check if extention is among the allowe ones
    if (allowedExtentions.includes(ext)) return ext;
    else throw new Error("File type is not allowed!");
  };
  return documentType;
};

export default useDocumentType;
