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
    const tl = gsap.timeline({});
    tl.pause()
    const carCategoryMenu = document.getElementById("car-category");
    const subNavigator = document.getElementById("sub-navigator");

    tl.fromTo("#sub-navigator", {
        y: -10,
        duration: 100
    }, {
        display: "flex",
        y: 0,
        
    }).to("#sub-navigator", {
        opacity: 1,

    }, "<")

    carCategoryMenu.addEventListener("mouseenter", () => {
        tl.play();

    });

    subNavigator.addEventListener("mouseleave", () => {
        tl.reverse();

    });


}