const dropdownMenu = document.querySelector(".dropdown-menu");
const empNavItem = document.getElementById("employees-nav-item");

console.log(empNavItem);

empNavItem.onmouseover = () => {
  dropdownMenu.classList.remove("not-visible");
};

dropdownMenu.onmouseleave = () => {
  dropdownMenu.classList.add("not-visible");
};