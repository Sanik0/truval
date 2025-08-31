// Individual GSAP animations (without timeline)
gsap.from('header', {
    y: '-100%',
    duration: 1,
    ease: "power2.out"
});

gsap.from(".section-hero .texts-container", {
    x: '-100%',
    duration: 1,
    ease: "power2.out"
});

gsap.from('.section-hero .image-container', {
    x: '100%',
    duration: 1,
    ease: "power2.out"
});

gsap.from('.section-services', {
    y: '100%',
    duration: 1,
    ease: "power2.in"
});

gsap.from('.section-services .cards-container .card', {
    y: '100%',
    duration: 1,
    ease: "power2.in",
    stagger: .5
});

gsap.from('.section-destinations', {
    y: '100%',
    duration: 1,
    ease: "power2.in"
});

gsap.from('.section-destinations .cards-container .card', {
    ease: "power2.in",
    opacity: 0,
    duration: 1,
    stagger: .7
});

gsap.from('.section-booking .descriptions-container', {
    ease: "power2.in",
    x: "-100%",
    duration: 1
});

gsap.from('.section-booking .image-container', {
    ease: "power2.in",
    x: "100%",
    duration: 1
});

gsap.from('.section-booking .descriptions-container .cards-container .card', {
    ease: "power2.in",
    y: "100%",
    duration: 1,
    stagger: .3
});

gsap.from('.section-testimonials .headings', {
    x: '-100%',
    duration: 1,
    ease: 'power2.out'
});

gsap.from('.section-testimonials .testimonials-container', {
    x: '100%',
    duration: 1,
    ease: 'power2.out'
});

gsap.from('.section-subscribe .subscribe-container', {
    x: '-100%',
    duration: 1,
    ease: 'elastic'
});

gsap.from('.section-subscribe h1', {
    y: '-100%',
    duration: 1,
    ease: 'power2.out'
});

// menu

const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const menu = document.querySelector(".menu-container");

openBtn.addEventListener("click", () => {
    menu.classList.add("show");
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("show");
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
});

// 


