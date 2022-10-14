import { numberOfImage } from "../helpers/numberOfImage";

const previousButtonRes = document.querySelector("#previousButtonRes");
const nextButtonRes = document.querySelector("#nextButtonRes");
const showImage = document.querySelector("#selectedImageResponsive");

export const nextImageResponsive = () => {
  nextButtonRes.addEventListener("click", () => {
    // const selectedImageResponsive = document.querySelector("#selectedImageResponsive");
    const number = numberOfImage("#selectedImageResponsive");
    console.log(number);
    if (parseInt(number) + 1 >= 5) return;
    showImage.setAttribute(
      "src",
      `./src/assets/product/image-product-${parseInt(number) + 1}.jpg`
    );
  });
};

export const previousImageResponsive = () => {
  previousButtonRes.addEventListener("click", () => {
    // const selectedImageResponsive = document.querySelector("#selectedImageResponsive");
    console.log(selectedImageResponsive.src);
    const number = numberOfImage("#selectedImageResponsive");
    if (parseInt(number) === 1) return;
    showImage.setAttribute(
      "src",
      `./src/assets/product/image-product-${parseInt(number) - 1}.jpg`
    );
  });
};
