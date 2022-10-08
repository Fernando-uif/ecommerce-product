const multiplyElements = document.querySelector("#multiplyElements");
const total = document.querySelector("#total");
const addToCartButton = document.querySelector("#addCartButton");
const navContainerCard = document.querySelector('#navContainerCard');

export const addToCart = () => {
  addToCartButton.addEventListener("click", () => {
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
export const removeCardCart = () => {
  //TODO: Se ocultara el elemento que tengamos cuando se este mostrando la card de el carrito junto con los elementos internos.
  
  addToCartButton.addEventListener('click',()=>{
    if(!navContainerCard.classList.contains('hidden')){
      navContainerCard.classList.add('hidden');
    }
  })
}