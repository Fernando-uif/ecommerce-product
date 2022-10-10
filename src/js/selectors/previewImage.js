const showImage = document.querySelector("#showImage");
const previewImage = document.querySelector("#previewImage");
const closeIcon = document.querySelector("#closeImage");
const selectedImage = document.querySelector("#selectedImagePreview");

export const openPreviewImage = () => {
  showImage.addEventListener("click", (e) => {
    previewImage.classList.remove("hidden");
    selectedImage.setAttribute("src", e.target.src);
  });
};

export const closePreviewImage = () => {
  closeIcon.addEventListener("click", () => {
    previewImage.classList.add("hidden");
  });
};
