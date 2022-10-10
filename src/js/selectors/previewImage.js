const showImage = document.querySelector("#showImage");
const previewImage = document.querySelector("#previewImage");
const closeIcon = document.querySelector("#closeImage");
const selectedImage = document.querySelector("#selectedImagePreview");
//TODO:Funcion para Colocar y eliminar estilos
export const openPreviewImage = () => {
  showImage.addEventListener("click", (e) => {
    previewImage.classList.remove("hidden");
    selectedImage.setAttribute("src", e.target.src);
    const numberElement = e.target.src.match(/-\d+/g);
    const numberOfImage = numberElement.join()[1];

    // * Removing Classes
    document
      .querySelectorAll(".previewImage__thumbnailContainer")
      .forEach((element) => {
        element.classList.remove("previewImage__thumbnailContainer-selected");
        console.log(element);
      });
    document
      .querySelectorAll(".previewImage__thumbnailImg")
      .forEach((element) => {
        element.classList.remove("previewImage__thumbnailImg-selected");
      });

    // * Add the style of the image select
    document
      .querySelector(`.previewImage__thumbnailContainer-${numberOfImage}`)
      .classList.add("previewImage__thumbnailContainer");
    document
      .querySelector(`.previewImage__thumbnailContainer-${numberOfImage}`)
      .classList.add("previewImage__thumbnailContainer-selected");
    document
      .querySelector(`.previewImage__thumbnailImg-${numberOfImage}`)
      .classList.add("previewImage__thumbnailImg-selected");
  });
};

export const closePreviewImage = () => {
  closeIcon.addEventListener("click", () => {
    previewImage.classList.add("hidden");
  });
};
