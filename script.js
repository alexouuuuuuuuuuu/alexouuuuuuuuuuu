document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation du logo dans la barre de navigation
    gsap.to(".nav__container-logo", {
        y: 20,
        yoyo: true,
        repeat: -1,
        duration: 1
    });

    // Animation des personnages de la section 1
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


    // animation des étoiles dans la section 1

    const etoile = document.querySelector('.section1__star');

    function rotateEtoile() {
    gsap.to(etoile, {
        duration: 1, 
        rotation: '+=360', 
        ease: 'power2.inOut',
        onComplete: () => {
        }
    });
    }

    setInterval(rotateEtoile, 5000);


    const etoile2 = document.querySelector('.section1__star2');
        
    function rotateEtoile2() {
    gsap.to(etoile2, {
        duration: 1, 
        rotation: '+=360', 
        ease: 'power2.inOut', 
        onComplete: () => {
        }
    });
    }

    setInterval(rotateEtoile2, 5000);


    // animation des étoiles au scroll section 3

    const scrollObjects = document.querySelectorAll('.scroll-object');

            function rotateOnScroll() {
            const scrollTop = window.scrollY; 
            const rotationValue = scrollTop * 0.2;

            scrollObjects.forEach(scrollObject => {
                gsap.to(scrollObject, {
                duration: 0.2, 
                rotation: rotationValue, 
                ease: 'none', 
                });
            });
            }

            window.addEventListener('scroll', rotateOnScroll);
        


    const fille = gsap.timeline({
        scrollTrigger: {
            trigger: '.section4__container-fille',
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
            markers: false
        }
    });

    fille.to('.section4__container-fille', { x: 580, y: 200, duration: 1 });



    
    const garcon = gsap.timeline({
        scrollTrigger: {
            trigger: '.section5__container-garcon',
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
            markers: false
        }
    });

    garcon.to('.section5__container-garcon', { x: 1380, y: -150, duration: 1 });

    
    // animation formes section 6
    
    // Sélection de toutes les boules
    const balls = document.querySelectorAll('.section6__ball, .section6__triangle, .section6__rect, .section6__carre');
    const container = document.getElementById('container');
    const section = document.querySelector('.section6__container');

    // Centre de la section
    const sectionRect = section.getBoundingClientRect();
    const centerX = sectionRect.width / 2 ;
    const centerY = sectionRect.height / 2;

    // Position initiale des boules : toutes au même point (centre de la section)
    balls.forEach(ball => {
        ball.style.left = `${centerX}px`;
        ball.style.top = `${centerY}px`;
    });

    // Animation de dispersion au scroll
    gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom top",
            scrub: true,
            once: true, 
        },
    }).to(balls, {
        x: () => Math.random() * sectionRect.width * 1.5 - centerX,
        y: () => Math.random() * sectionRect.height * 1.2 - centerY,
        rotation: () => Math.random() * 360,
        scale: () => 0.8 + Math.random() * 0.5,
        duration: 2,
        ease: "power2.out",
        stagger: 0.1,
    });


    gsap.timeline({
        scrollTrigger: {
            trigger: '.section8__pyramid',
            start: 'top 50%',
            end: 'bottom 0%',
            scrub: true,
            markers: false
        }
        
    })
    .fromTo(
        ".section8__cone", 
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1, ease: "power2.out" }
    )
    .fromTo(
        ".section8__mid",
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1, ease: "power2.out" },
        "<0.5"
    )
    .fromTo(
        ".section8__base",
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1, ease: "power2.out" },
        "<0.5"
    );


    const ball1 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section7__boule-rose1',
            start: 'top 90%',
            end: 'top 60%',
            scrub: true,
        }
    });

    ball1.to('.section7__boule-rose1', { x: '40vw', y: '-40vh', duration: 1 });


    const ball2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section7__info1',
            start: 'top 90%',
            end: 'top 60%',
            scrub: true,
        }
    });

    ball2.to('.section7__info1', { x: '30vw', y: '-30vh', duration: 1 });

    const ball3 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section7__info2',
            start: 'top 90%',
            end: 'top 60%',
            scrub: true,
        }
    });

    ball3.to('.section7__info2', { x: '50vw', y: '-50vh', duration: 1 });


    const ball4 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section7__boule-violet1',
            start: 'top 90%',
            end: 'top 60%',
            scrub: true,
        }
    });

    ball4.to('.section7__boule-violet1', { x: '60vw', y: '-30vh', duration: 1 });

    const ball5 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section7__boule-jaune2',
            start: 'top 90%',
            end: 'top 60%',
            scrub: true,
        }
    });

    ball5.to('.section7__boule-jaune2', { x: '70vw', y: '-10vh', duration: 1 });


    const ball6 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section7__boule-bleu',
            start: 'top 90%',
            end: 'top 60%',
            scrub: true,
        }
    });

    ball6.to('.section7__boule-bleu', { x: '30vw', y: '-45vh', duration: 1 });


    const ball7 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section7__boule-violet2',
            start: 'top 90%',
            end: 'top 60%',
            scrub: true,
        }
    });

    ball7.to('.section7__boule-violet2', { x: '30vw', y: '-10vh', duration: 1 });


    const ball8 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section7__info3',
            start: 'top 90%',
            end: 'top 60%',
            scrub: true,
        }
    });

    ball8.to('.section7__info3', { x: '40vw', y: '-15vh', duration: 1 });

    const ball9 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section7__info4',
            start: 'top 90%',
            end: 'top 60%',
            scrub: true,
        }
    });

    ball9.to('.section7__info4', { x: '30vw', y: '0vh', duration: 1 });


    // Animation des marionnettes

    const marionnette1 = document.querySelector('img[src="./assets/marionnette1.svg"]');
    const marionnette2 = document.querySelector('img[src="./assets/marionnette2.svg"]');

    gsap.set(marionnette2, { opacity: 0 });

    const tl = gsap.timeline({ defaults: { duration: 100 } }); 
    tl.to(marionnette1, { opacity: 0 })
        .to(marionnette2, { opacity: 1 });

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
        trigger: marionnette1,
        start: "top center",
        end: "bottom center",
        animation: tl,
        scrub: true,
    });
    
});
