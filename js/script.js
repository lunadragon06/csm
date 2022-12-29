// Hamburger menu toggle
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".nav-menu");

hamburgerMenu.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburgerMenu.classList.toggle("active");
    navbar.classList.toggle("active");
}