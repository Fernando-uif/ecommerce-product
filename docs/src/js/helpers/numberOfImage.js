export const numberOfImage = (id) => {
  const showImage = document.querySelector(id);
  const numberElement = showImage.getAttribute("src").match(/-\d+/g);
  const numberOfImage = numberElement.join()[1];
  return numberOfImage;
};
