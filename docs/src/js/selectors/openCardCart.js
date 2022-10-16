const totalItemsCart = document.querySelector("#totalItemsCart");
const cartIcon = document.querySelector("#cartIcon");
const navContainerCard = document.querySelector("#navContainerCard");
const cardEmpty = document.querySelector("#cartEmpty");
const cardContain = document.querySelector("#cardContain");
const multiplyElements = document.querySelector("#multiplyElements");
const total = document.querySelector("#total");
const numberOfItems = document.querySelector("#numberOfItems");

export const openCardCart = () => {
  cartIcon.addEventListener("click", () => {
    navContainerCard.classList.toggle("hidden");

    if (!totalItemsCart.innerText) {
      cardContain.classList.add("hidden");
      cardEmpty.classList.remove("hidden");
      return;
    }

    cardContain.classList.remove("hidden");
    cardEmpty.classList.add("hidden");

    multiplyElements.innerText = parseInt(totalItemsCart.innerText);
    total.innerText = `$${parseInt(totalItemsCart.innerText) * 125}.00`;
  });
};
export const closeCardCart = () => {
};
