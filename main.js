import {
  addItem,
  addToCart,
  closePreviewImage,
  decrementItem,
  deleteItem,
  nextImage,
  nextImageResponsive,
  openCardCart,
  openPreviewImage,
  previewImage,
  previousImageResponsive,
  removeCardCart,
  selectedImage,
  selectedImagePreview,
} from "./src/js/selectors";

// * Number of items
addItem();
decrementItem();

// * Card of cart
addToCart();
deleteItem();
openCardCart();
removeCardCart();

// * Preview Image
closePreviewImage();
openPreviewImage();

selectedImage();
selectedImagePreview();

nextImageResponsive();
previousImageResponsive();

// * Next and Preview Image
nextImage();
previewImage();
