export const addToCart = () => {
  document.querySelector("#addCartButton").addEventListener("click", () => {
    const totalItemsCart = document.querySelector("#totalItemsCart");
    const totalOfItems = parseInt(
      document.querySelector("#numberOfItems").innerText
    );
    if (!totalOfItems) return;
    totalItemsCart.innerHTML = totalOfItems;
  });
};
