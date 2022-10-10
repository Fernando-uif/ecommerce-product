import { numberOfImage } from "../helpers/numberOfImage";

const nextButton = document.querySelector("#nextButton");
const previewButton = document.querySelector("#previewButton");
const showImage = document.querySelector("#selectedImagePreview");

export const nextImage = () => {
  nextButton.addEventListener("click", () => {
    const number = numberOfImage("#selectedImagePreview");
    if (parseInt(number) + 1 >= 5) return;
    showImage.setAttribute(
      "src",
      `./src/assets/product/image-product-${parseInt(number) + 1}.jpg`
    );
  });
};
export const previewImage = () => {
  previewButton.addEventListener("click", () => {
    const number = numberOfImage("#selectedImagePreview");
    if (parseInt(number) === 1) return;
    showImage.setAttribute(
      "src",
      `./src/assets/product/image-product-${parseInt(number) - 1}.jpg`
    );
  });
};
