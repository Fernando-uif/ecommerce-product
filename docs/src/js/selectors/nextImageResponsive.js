import { numberOfImage } from "../helpers/numberOfImage.js";

const previousButtonRes = document.querySelector("#previousButtonRes");
const nextButtonRes = document.querySelector("#nextButtonRes");
const showImage = document.querySelector("#selectedImage");

export const nextImageResponsive = () => {
  nextButtonRes.addEventListener("click", () => {
    // const selectedImage = document.querySelector("#selectedImage");
    const number = numberOfImage("#selectedImage");
    if (parseInt(number) + 1 >= 5) return;
    showImage.setAttribute(
      "src",
      `./src/assets/product/image-product-${parseInt(number) + 1}.jpg`
    );
  });
};

export const previousImageResponsive = () => {
  previousButtonRes.addEventListener("click", () => {
    const number = numberOfImage("#selectedImage");
    if (parseInt(number) === 1) return;
    showImage.setAttribute(
      "src",
      `./src/assets/product/image-product-${parseInt(number) - 1}.jpg`
    );
  });
};
