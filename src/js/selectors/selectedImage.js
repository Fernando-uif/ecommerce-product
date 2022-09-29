export const selectedImage = () => {
  document.querySelectorAll(".product__thumbnailImg").forEach((element) => {
    const reg = /-\d/g;
    element.addEventListener("click", (e) => {
      const selectedImg = e.target.src.match(reg);
      const selectedNumber = selectedImg.join()[1];
      document.querySelector(
        "#selectedImage"
      ).src = `./src/assets/product/image-product-${selectedNumber}.jpg`;
    });
  });
};
