const multiplyElements = document.querySelector("#multiplyElements");
const total = document.querySelector("#total");

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

    multiplyElements.innerText = parseInt(totalItemsCart.innerText);
    total.innerText = `$${parseInt(totalItemsCart.innerText) * 125}.00`;
  });
};
