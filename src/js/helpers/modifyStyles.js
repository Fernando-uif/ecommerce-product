//TODO:Generar efectivamente los estilos
export const addImageStyles = (numberOfImage) => {
  document
    .querySelector(`.previewImage__thumbnailContainer-${numberOfImage}`)
    .classList.add("previewImage__thumbnailContainer");
  document
    .querySelector(`.previewImage__thumbnailContainer-${numberOfImage}`)
    .classList.add("previewImage__thumbnailContainer-selected");
  document
    .querySelector(`.previewImage__thumbnailImg-${numberOfImage}`)
    .classList.add("previewImage__thumbnailImg-selected");
};

export const removeImageStyles = (numberOfImage) => {
  document
    .querySelector(`.previewImage__thumbnailContainer-${numberOfImage}`)
    .classList.add("previewImage__thumbnailContainer");
  document
    .querySelector(`.previewImage__thumbnailContainer-${numberOfImage}`)
    .classList.add("previewImage__thumbnailContainer-selected");
  document
    .querySelector(`.previewImage__thumbnailImg-${numberOfImage}`)
    .classList.add("previewImage__thumbnailImg-selected");
};
