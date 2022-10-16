const navResponsive = document.querySelector("#navResponsive");
const navResponsiveContainer = document.querySelector(
  "#navResponsiveContainer"
);
const navResponsiveClose = document.querySelector("#navResponsiveClose");

export const openNavResponsive = () => {
  navResponsive.addEventListener("click", () => {
    navResponsiveContainer.classList.remove("hidden");
  });
};

export const closeNavResponsive = () => {
  navResponsiveClose.addEventListener("click", (e) => {
    navResponsiveContainer.classList.add("hidden");
  });
};
