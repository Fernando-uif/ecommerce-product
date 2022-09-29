export const addToCart = () => {
  document.querySelector("#addCartButton").addEventListener("click", () => {
    const totalItemsCart = document.querySelector("#totalItemsCart");
    const totalOfItems = parseInt(
      document.querySelector("#numberOfItems").innerText
    );
    if (!totalOfItems) {
      totalItemsCart.classList.add = "nav__nav-iconHidden";
      totalItemsCart.innerHTML = "";
      return;
    }
    totalItemsCart.classList.remove = "nav__nav-iconHidden";
    totalItemsCart.innerHTML = totalOfItems;
  });
};