/* =========================================
   HEADER
========================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

    menuButton.classList.toggle("active");

});


/* Close menu after clicking a link */

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");
        menuButton.classList.remove("active");

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   HERO PARALLAX
========================================= */

const soundWave = document.querySelector(".sound-wave");

window.addEventListener("mousemove", (event) => {

    if (!soundWave) return;

    const x = (event.clientX / window.innerWidth - 0.5) * 20;
    const y = (event.clientY / window.innerHeight - 0.5) * 20;

    soundWave.style.transform =
        `translate(${x}px, calc(-50% + ${y}px))`;

});
