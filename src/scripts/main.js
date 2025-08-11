import Home from "./pages/home";

const hamburger = document.querySelector(".nav__hamburger");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
});


new Home()