const totalItemsCart = document.querySelector("#totalItemsCart");
const cartIcon = document.querySelector("#cartIcon");
const navContainerCard = document.querySelector("#navContainerCard");
const cardEmpty = document.querySelector("#cartEmpty");
const cardContain = document.querySelector("#cardContain");
const multiplyElements = document.querySelector("#multiplyElements");
const total = document.querySelector("#total");

export const openCardCart = () => {
  cartIcon.addEventListener("click", () => {
    console.log(parseInt(totalItemsCart.innerText), "Tenemos el elemento");
    if (!parseInt(totalItemsCart.innerText)) {
      navContainerCard.classList.remove("hidden");
      cardEmpty.classList.remove("hidden");
      if (navContainerCard.classList.contains("hidden")) {
        navContainerCard.classList.add("hidden");
        cardEmpty.classList.add("hidden");
      }
      return;
    }
    navContainerCard.classList.toggle("hidden");
    cardContain.classList.toggle("hidden");
    multiplyElements.innerText = parseInt(totalItemsCart.innerText);
    total.innerText = `$${parseInt(totalItemsCart.innerText) * 125}.00`;
  });
};
export const closeCardCart = () => {
  document.addEventListener("click", (e) => {
    const outside = !navContainerCard.contains(e.target);
    if (outside) {
      navContainerCard.classList.add("hidden");
    }
  });
};
