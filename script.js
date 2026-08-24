alert("Welcome to M.baqir designs website !");
/* ==========================================
   M.BAQIR DESIGNS
   JavaScript Part 1
========================================== */

// ==========================
// PRELOADER
// ==========================

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    if (preloader) {

        preloader.style.opacity = "0";

        setTimeout(() => {

            preloader.style.display = "none";

        }, 500);

    }

});

// ==========================
// SCROLL PROGRESS BAR
// ==========================

window.addEventListener("scroll", function () {

    let winScroll = document.documentElement.scrollTop;

    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let scrolled = (winScroll / height) * 100;

    const progress = document.getElementById("progress-bar");

    if (progress) {

        progress.style.width = scrolled + "%";

    }

});
/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

/* ==========================================
   STICKY NAVBAR
========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(13,17,23,0.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";

    } else {

        navbar.style.background = "rgba(13,17,23,.85)";
        navbar.style.boxShadow = "none";

    }

});
/* ==========================================
   SMOOTH SCROLLING
========================================== */

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {

            target.scrollIntoView({

                behavior: 'smooth'

            });

        }

        // Close mobile menu after clicking
        navLinks.classList.remove('active');

    });

});

/* ==========================================
   ACTIVE NAVIGATION LINK
========================================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
/* ==========================================
   SCROLL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(
    ".section, .service-card, .portfolio-card, .skill"
);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);
/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
/* ==========================================
   TYPING EFFECT
========================================== */

const words = [
    "Professional Graphic Designer",
    "Creative Logo Designer",
    "Professional Poster Designer",
    "Vector Illustration Expert"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    if (!typingElement) return;

    let currentWord = words[wordIndex];

    if (!isDeleting) {

        typingElement.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        typingElement.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 50 : 120);

}

typeEffect();
/* ==========================================
   ANIMATED SKILL BARS
========================================== */

const skillBars = document.querySelectorAll(".progress-bar");

function animateSkills() {

    skillBars.forEach((bar) => {

        const targetWidth = bar.textContent.trim();

        bar.style.width = "0%";

        const barTop = bar.getBoundingClientRect().top;

        if (barTop < window.innerHeight - 100) {

            setTimeout(() => {

                bar.style.width = targetWidth;

            }, 300);

        }

    });

}

window.addEventListener("load", animateSkills);

window.addEventListener("scroll", animateSkills);
/* ==========================================
   IMAGE LIGHTBOX
========================================== */

const portfolioImages = document.querySelectorAll(".portfolio-card img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeLightbox = document.getElementById("close-lightbox");

portfolioImages.forEach((image) => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = image.src;

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        lightbox.style.display = "none";

    }

});

/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("click", function(e) {

        const circle = document.createElement("span");

        const diameter = Math.max(button.clientWidth, button.clientHeight);

        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;

        circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;

        circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;

        circle.classList.add("ripple");

        const ripple = button.querySelector(".ripple");

        if (ripple) {

            ripple.remove();

        }

        button.appendChild(circle);

    });

});