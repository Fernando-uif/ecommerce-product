export const addItem = () => {
  document.querySelector("#addItem").addEventListener("click", () => {
    if (parseInt(document.querySelector("#numberOfItems").innerHTML) >= 10)
      return;
    document.querySelector("#numberOfItems").innerHTML =
      parseInt(document.querySelector("#numberOfItems").innerHTML) + 1;
  });
};
export const decrementItem = () => {
  document.querySelector("#lessItem").addEventListener("click", () => {
    if (parseInt(document.querySelector("#numberOfItems").innerHTML) < 1)
      return;
    document.querySelector("#numberOfItems").innerHTML =
      parseInt(document.querySelector("#numberOfItems").innerHTML) - 1;
  });
};
