const menuBtn = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("open-nav");
    menuBtn.classList.toggle("open-nav");
});
