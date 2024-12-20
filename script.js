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

