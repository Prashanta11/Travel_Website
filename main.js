const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn?.querySelector("i");

// Toggle Navigation Menu
if (menuBtn && navLinks && menuBtnIcon) {
  menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    menuBtn.setAttribute("aria-expanded", isOpen);
  });

  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });
}

// ScrollReveal Config
const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

const revealElements = [
  [".header__image img", { origin: "right" }],
  [".header__content p", { delay: 500 }],
  [".header__content h1", { delay: 1000 }],
  [".header__btns", { delay: 1500 }],
  [".destination__card", { interval: 500 }],
  [".showcase__image img", { origin: "left" }],
  [".showcase__content h4", { delay: 500 }],
  [".showcase__content p", { delay: 1000 }],
  [".showcase__btn", { delay: 1500 }],
  [".banner__card", { interval: 500 }],
  [".discover__card", { interval: 500 }],
];

revealElements.forEach(([selector, options]) => {
  ScrollReveal().reveal(selector, { ...scrollRevealOption, ...options });
});

// Swiper Config
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
