// start header
let menu = document.getElementById("menu-btn");
let nav = document.querySelector(".nav");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  nav.classList.toggle("active");
});

let items = document.querySelectorAll(".item");
items.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".item.active").classList.remove("active");
    item.classList.add("active");
  });
});
// end header
