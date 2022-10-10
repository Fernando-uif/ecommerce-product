export const selectedImagePreview = () => {
  document
    .querySelectorAll(".previewImage__thumbnailImg")
    .forEach((element) => {
      const reg = /-\d+/g;
      element.addEventListener("click", ({ target }) => {
        const selectedImg = target.src.match(reg);
        const selectedNumber = selectedImg.join()[1];
        document.querySelector(
          "#selectedImagePreview"
        ).src = `./src/assets/product/image-product-${selectedNumber}.jpg`;
        selectedImageStyle(selectedNumber);
      });
    });
};
const selectedImageStyle = (idImage) => {
  // * Removing Classes
  document
    .querySelectorAll(".previewImage__thumbnailContainer")
    .forEach((element) => {
      element.classList.remove("previewImage__thumbnailContainer");
      element.classList.remove("previewImage__thumbnailContainer-selected");
    });
  document
    .querySelectorAll(".previewImage__thumbnailImg")
    .forEach((element) => {
      element.classList.remove("previewImage__thumbnailImg-selected");
    });

  // * Adding classes of the element selected
  document
    .querySelector(`.previewImage__thumbnailContainer-${idImage}`)
    .classList.add("previewImage__thumbnailContainer");
  document
    .querySelector(`.previewImage__thumbnailContainer-${idImage}`)
    .classList.add("previewImage__thumbnailContainer-selected");
  document
    .querySelector(`.previewImage__thumbnailImg-${idImage}`)
    .classList.add("previewImage__thumbnailImg-selected");
};

// previewImage__thumbnailContainer-selected
