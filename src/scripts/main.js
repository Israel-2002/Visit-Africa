import Home from "./pages/home";
import Lenis from "lenis";
import 'lenis/dist/lenis.css'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const hamburger = document.querySelector(".nav__hamburger");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
});


new Home()

const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
