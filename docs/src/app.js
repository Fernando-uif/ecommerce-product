import {
  addItem,
  addToCart,
  closeNavResponsive,
  closePreviewImage,
  decrementItem,
  deleteItem,
  nextImage,
  nextImageResponsive,
  openCardCart,
  openNavResponsive,
  openPreviewImage,
  previewImage,
  previousImageResponsive,
  removeCardCart,
  selectedImage,
  selectedImagePreview,
} from "./js/selectors/index.js";

// * Open Nav Responsive
openNavResponsive();
closeNavResponsive();

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
