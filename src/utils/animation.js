import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const testlaAnimation = () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#tesla-section",
            start: "top 70%",
            end: "35% 50%",
            markers: false,
            scrub: true
        }
    });

    tl.from("#tesla", {
        yPercent: 50,
        scale: 0.95,
        filter: "blur(5px)"
    }).from("img[alt='testla-bg-1']", {
        yPercent: 50,
        xPercent: -5,
        opacity: 0,
        skewX: 10
    }, "<0.1").from("img[alt='testla-bg-2']", {
        yPercent: 30,
        xPercent: 5,
        opacity: 0,
        skewX: -10
    }, "<0.1")
}

export const navbarAnimation = () => {
    const mediumSizeTl = gsap.timeline({ delay: 0 });
    const smallSizeTl = gsap.timeline({ delay: 0 });
    mediumSizeTl.pause()
    smallSizeTl.pause()

    const carCategoryMenu = document.getElementById("car-category");
    const subNavigator = document.getElementById("sub-navigator");

    mediumSizeTl.fromTo("#sub-navigator", {
        x: 0,
        y: -10,
    }, {
        display: "flex",
        y: 0,
        x: 0,
    }).to("#sub-navigator", {
        opacity: 1,
        duration: 0.5
    }, "<").fromTo(".carlist-animation", {
        opacity: 0,
        x: 20,
    }, {
        stagger: 0.01,
        opacity: 1,
        x: 0,
    }, "<")

    smallSizeTl.fromTo("#sub-navigator", {
        x: 100,
        y: 0,
    }, {
        display: "flex",
        x: 0,
        y: 0,
    }).to("#sub-navigator", {
        opacity: 1,
    }, "<").fromTo(".carlist-animation", {

        opacity: 0,
        x: 20
    }, {
        stagger: 0.01,
        opacity: 1,
        x: 0,
    }, "<")

    carCategoryMenu.addEventListener("mouseenter", () => {
        if (window.innerWidth > 768) { // Screen size must larger than md
            mediumSizeTl.play();
            smallSizeTl.revert();
        } else {
            smallSizeTl.play();
            mediumSizeTl.revert();
        }


    });

    subNavigator.addEventListener("mouseleave", () => {
        if (window.innerWidth > 768) {
            mediumSizeTl.reverse();
            smallSizeTl.revert();
        } else {
            smallSizeTl.reverse();
            mediumSizeTl.revert();
        }
    });

    const backMainNav = document.getElementById("back-main-nav");
    backMainNav.addEventListener("click", () => {
        if (window.innerWidth > 768) {
            mediumSizeTl.reverse();
            smallSizeTl.revert();
        } else {
            smallSizeTl.reverse();
            mediumSizeTl.revert();
        }
    })
}

export const searchAnimation = () => {
    gsap.from("#search", {
        y: 20,
        opacity: 0,
        scale: 0.8,
        skewX: "80deg",
    })
}

export const modalPageOneAnimation = () => {

    const paymentShowTl = gsap.timeline({
        delay: 0
    })

    paymentShowTl.from(".payment-card ", {
        y: 35,
        opacity: 0,
        duration: 1,
        ease: "expo.out"
    })
}