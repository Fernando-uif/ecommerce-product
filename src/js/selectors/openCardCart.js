export const openCardCart = () => {
  const totalItemsCart = document.querySelector("#totalItemsCart");
  const cartIcon = document.querySelector("#cartIcon");
  const navContainerCard = document.querySelector("#navContainerCard");
  const cardEmpty = document.querySelector("#cartEmpty");
  const cardContain = document.querySelector("#cardContain");

  cartIcon.addEventListener("click", () => {
    console.log(parseInt(totalItemsCart.innerText),'Tenemos el elemento');
    if (!parseInt(totalItemsCart.innerText)) {
      navContainerCard.classList.toggle("hidden");
      cardEmpty.classList.toggle("hidden");
      return;
    }
    navContainerCard.classList.toggle("hidden");
    cardContain.classList.toggle('hidden');
  });
};
