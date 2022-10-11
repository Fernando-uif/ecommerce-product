import { numberOfImage } from "../helpers/numberOfImage";

const nextButton = document.querySelector("#nextButton");
const previewButton = document.querySelector("#previewButton");
const showImage = document.querySelector("#selectedImagePreview");

export const nextImage = () => {
  nextButton.addEventListener("click", () => {
    const number = numberOfImage("#selectedImagePreview");
    if (parseInt(number) + 1 >= 5) return;
    document
      .querySelectorAll(".previewImage__thumbnailContainer")
      .forEach((element) => {
        console.log(element, "Tenemos el element");
        element.classList.remove("previewImage__thumbnailContainer-selected");
      });
    document
      .querySelectorAll(".previewImage__thumbnailImg")
      .forEach((element) => {
        console.log(element);
        element.classList.remove("previewImage__thumbnailImg-selected");
      });
    const nextContainer = document.querySelector(
      `.previewImage__thumbnailContainer-${parseInt(number) + 1}`
    );
    nextContainer.classList.add("previewImage__thumbnailContainer-selected");

    const nextImagen = document.querySelector(
      `.previewImage__thumbnailImg-${parseInt(number) + 1}`
    );
    nextImagen.classList.add("previewImage__thumbnailImg-selected");

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
    document
      .querySelectorAll(".previewImage__thumbnailContainer")
      .forEach((element) => {
        console.log(element, "Tenemos el element");
        element.classList.remove("previewImage__thumbnailContainer-selected");
      });
    document
      .querySelectorAll(".previewImage__thumbnailImg")
      .forEach((element) => {
        console.log(element);
        element.classList.remove("previewImage__thumbnailImg-selected");
      });
    const nextContainer = document.querySelector(
      `.previewImage__thumbnailContainer-${parseInt(number) - 1}`
    );
    nextContainer.classList.add("previewImage__thumbnailContainer-selected");

    const nextImagen = document.querySelector(
      `.previewImage__thumbnailImg-${parseInt(number) - 1}`
    );
    nextImagen.classList.add("previewImage__thumbnailImg-selected");

    showImage.setAttribute(
      "src",
      `./src/assets/product/image-product-${parseInt(number) - 1}.jpg`
    );
  });
};
