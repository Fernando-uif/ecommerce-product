export const selectedImage = () => {
  document.querySelectorAll(".product__thumbnailImg").forEach((element) => {
    const reg = /-\d+/g;
    element.addEventListener("click", ({ target }) => {
      const selectedImg = target.src.match(reg);
      const selectedNumber = selectedImg.join()[1];
      document.querySelector(
        "#selectedImage"
      ).src = `./src/assets/product/image-product-${selectedNumber}.jpg`;
      selectedImageStyle(selectedNumber);
    });
  });
};
const selectedImageStyle = (idImage = 1) => {
// * Removing Classes
  document
    .querySelectorAll(".product__thumbnailContainer")
    .forEach((element) => {
      element.classList.remove("product__thumbnailContainer");
    });
  document.querySelectorAll(".product__thumbnailImg").forEach((element) => {
    element.classList.remove("product__thumbnailImg-selected");
  });
  
// * Adding classes of the element selected
  document
    .querySelector(`.product__thumbnailContainer-${idImage}`)
    .classList.add("product__thumbnailContainer");
  document
    .querySelector(`.product__thumbnailImg-${idImage}`)
    .classList.add("product__thumbnailImg-selected");
};

