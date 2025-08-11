import gsap from "gsap";
import Page from "../page";

export default class Home extends Page {
    constructor() {
        super();

        this.createAnimation();
    }

    createAnimation() {
        const tl = gsap.timeline({
            defaults: {
                duration: 0.8,
            },
        });

        tl.to(".home__title-span--1", {
            delay: 1,
            y: 0,
        })
            .to(".home__title-span--1", {
                yPercent: -150,
                delay: 1,
            })
            .to(
                ".home__title-span--2",
                {
                    y: 0,
                },
                "<",
            )
            .to(".home__title-slide", {
                x: "30.5rem",
                delay: 1,
                ease: "power4.out",
            })
            .to(
                ".home__title-images",
                {
                    scale: 1,
                    ease: "power4.out",
                },
                "<",
            )
            .to(".home__title-images img", {
                opacity: 1,
                stagger: 0.3,
                duration: 0.1,
                delay: 1.2,
                ease: "none",
            })
            .to(".home__title-slide", {
                x: "15rem",
                delay: 1,
                duration: 1.15,
                ease: "power4.out",
            })
            .to(
                ".home__title-images",
                {
                    scale: 0,
                    ease: "power4.out",
                },
                "<",
            )
            .to(".home__title-span--2", {
                yPercent: -150,
                delay: 1,
            })
            .to(".home__title-span--3", {
                y: 0,
            }, "<")
    }
}
