const deleteIcon = document.querySelector("#deleteItem");
const totalItemsCart = document.querySelector("#totalItemsCart");
export const deleteItem = () => {
  deleteIcon.addEventListener("click", () => {

    totalItemsCart.classList.add = "nav__nav-iconHidden";
    totalItemsCart.innerHTML = "";
    document.querySelector("#cartEmpty").classList.remove("hidden");
    document.querySelector("#cardContain").classList.add("hidden");
  });
};

