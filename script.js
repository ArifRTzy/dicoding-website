const menu = document.querySelector(".menu");
const ul = document.querySelector("#ul");

menu.addEventListener("click", () => {
  if (ul.style.display == "flex") {
    ul.style.display = "none";
  } else {
    ul.style.display = "flex";
  }
});