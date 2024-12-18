document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation du logo dans la barre de navigation
    gsap.to(".nav__container-logo", {
        y: 20,
        yoyo: true,
        repeat: -1,
        duration: 1
    });

    // Animation des éléments de la section 1
    gsap.utils.toArray(".section1__fille, .section1__garcon").forEach((element) => {
        gsap.fromTo(element, {
            x: "0%",
            y: element.classList.contains("section1__fille") ? "200px" : "500px"
        }, {
            x: element.classList.contains("section1__fille") ? "-100%" : "100%",
            y: element.classList.contains("section1__fille") ? "200px" : "500px",
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                end: "top 50%",
                scrub: true,
                markers: false
            }
        });
    });

    // Animation des boules dans la section 7
    gsap.utils.toArray(".section7__container-boules").forEach((element) => {
        gsap.fromTo(element, {
            x: "0%"
        }, {
            x: "80px",
            duration: 1,
            yoyo: true,
            repeat: false,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                end: "top 20%",
                scrub: true,
                markers: false
            }
        });
    });

});

    // Animation des boules dans la section 7


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
