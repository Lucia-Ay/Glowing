"use strict";

// --- Add Event On Element --- //

const addEvent = (element, type, callback) => {
  if (element.length > 1) {
    for (let i = 0; i < element.length; i++) {
      element[i].addEventListener(type, callback);
    }
  } else {
    element.addEventListener(type, callback);
  }
};

// --- Navbar Toggle --- //

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = () => {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEvent(navTogglers, "click", toggleNavbar);

const closeNavbar = () => {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

addEvent(navbarLinks, "click", closeNavbar);

// --- Header Sticky & Back Top Btn Active --- //

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = () => {
  if (window.scrollY > 150) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

addEvent(window, "scroll", headerActive);

let lastScrolledPos = 0;

const headerSticky = () => {
  if (lastScrolledPos >= window.scrollY) {
    header.classList.remove("header-hide");
  } else {
    header.classList.add("header-hide");
  }

  lastScrolledPos = window.scrollY;
};

addEvent(window, "scroll", headerSticky);

// --- Scroll Reveal Effect --- //

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = () => {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
      sections[i].classList.add("active");
    }
  }
};

scrollReveal();

addEvent(window, "scroll", scrollReveal);
