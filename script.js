document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    // gsap.registerPlugin(Flip, ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin, EaselPlugin, PixiPlugin, TextPlugin);
    // gsap code here!
    gsap.to(".nav__container-logo", {
        y: 20,
        yoyo: true,
        repeat: -1,
        duration: 1
    });
    gsap.utils.toArray(".section1__fille, .section1__garcon").forEach((element) => {
        gsap.fromTo(element, {
            x: element.classList.contains("section1__fille") ? "-100%" : "100%",
            y: element.classList.contains("section1__fille") ? "200px" : "500px"
        }, {
            x: "0%",
            y: element.classList.contains("section1__fille") ? "200px" : "500px",
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 20%",
                end: "top 10%",
                scrub: true,
                markers: true
            }
        });
    });
    
    // gsap.fromTo(".section1__fille", {
    //     x:"-100%" ,
    //     y: "200px" 
    // }, {
    //     x: "0%",
    //     y:  "200px",
    //     duration: 1.5,
    //     ease: "power2.out",
    //     scrollTrigger: {
    //         trigger: ".section1__fille",
    //         start: "top 40%",
    //         end: "50% 50%",
    //         toggleActions: "play reverse none none ",
    //         scrub: true,
    //         markers: true
    //     }
    // });
    
    
    });