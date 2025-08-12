import gsap from "gsap";
import Page from "../page";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default class Home extends Page {
    constructor() {
        super();

        this.createAnimation();
    }

    createAnimation() {
        const tl = gsap.timeline({
            defaults: {
                duration: 0.8,
                ease: "power2.out",
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
                x: "30rem",
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
                stagger: 0.25,
                duration: 0.1,
                delay: 1,
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
            .to(
                ".home__title-span--3",
                {
                    y: 0,
                },
                "<",
            );

        // TODO: Activate parallax animation for mobile
        // gsap.to(".home__img img", {
        //     y: 250,
        //     ease: "none",
        //     scrollTrigger: {
        //         trigger: ".home__img",
        //         start: "top center",
        //         scrub: true,
        //     },
        // });

        // gsap.to(".home__video video", {
        //     y: 350,
        //     ease: "none",
        //     scrollTrigger: {
        //         trigger: ".home__video",
        //         start: "top center",
        //         scrub: 1,
        //     },
        // });

        ScrollTrigger.create({
            trigger: ".home__img",
            pin: true,
            scrub: 1,
            animation: gsap.to("body", {
                backgroundColor: "#c25b64",
            }),
        });
    }
}
