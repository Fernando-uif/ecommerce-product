import {
  addItem,
  addToCart,
  closePreviewImage,
  decrementItem,
  deleteItem,
  nextImage,
  openCardCart,
  openPreviewImage,
  previewImage,
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

// * Next and Preview Image
nextImage();
previewImage();