import {
  addToCart,
  decrementItem,
  addItem,
  selectedImage,
  openCardCart,
  removeCardCart,
  openPreviewImage,
  closePreviewImage,
  selectedImagePreview,
} from "./src/js/selectors";

// * Number of items
addItem();
decrementItem();

// * Card of cart
addToCart();
openCardCart();
removeCardCart();

// * Preview Image
selectedImage();
openPreviewImage();
closePreviewImage();
selectedImagePreview();
