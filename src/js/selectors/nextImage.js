const nextButton = document.querySelector("#nextButton");
const previewButton = document.querySelector("#previewButton");
const showImage = document.querySelector("#selectedImagePreview");
//TODO:Hacer funcion que me regrese el numero de imagen en la que nos encontramos parados
export const nextImage = () => {
  nextButton.addEventListener("click", () => {
    console.log("Click en next");
    const numberElement = showImage.getAttribute("src").match(/-\d+/g);
    const numberOfImage = numberElement.join()[1];
    if (parseInt(numberOfImage) + 1 >= 5) return;
    showImage.setAttribute(
      "src",
      `./src/assets/product/image-product-${parseInt(numberOfImage) + 1}.jpg`
    );
  });
};
export const previewImage = () => {
  previewButton.addEventListener("click", () => {
    console.log("Click en next");
    const numberElement = showImage.getAttribute("src").match(/-\d+/g);
    const numberOfImage = numberElement.join()[1];
    if (parseInt(numberOfImage) === 1) return;
    showImage.setAttribute(
      "src",
      `./src/assets/product/image-product-${parseInt(numberOfImage) - 1}.jpg`
    );
  });
};
