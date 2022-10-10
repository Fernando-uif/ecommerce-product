const showImage = document.querySelector("#showImage");
const previewImage = document.querySelector("#previewImage");
const closeIcon = document.querySelector("#closeImage");
const selectedImage = document.querySelector("#selectedImagePreview");

export const openImage = () => {
  showImage.addEventListener("click", (e) => {
    console.log(e.target.src);
    previewImage.classList.remove("hidden");
    console.log(selectedImage.src, "Tenemos el src");
    selectedImage.setAttribute("src", e.target.src);
  });
};

export const closeImage = () => {
  closeIcon.addEventListener("click", () => {
    previewImage.classList.add("hidden");
  });
};
