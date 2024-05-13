'use strict';



/**
 * add Event on elements
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


/**
 * header & back top btn show when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");
const textLogo = document.querySelector("[data-text-logo]")
const imgLogo = document.querySelector("[data-logo-img]")

const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    imgLogo.classList.add("active");
    textLogo.classList.add("text-logo-hidden")
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
    textLogo.classList.remove("text-logo-hidden")
    imgLogo.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);

const carousel = document.querySelector(".slideParent");

carousel.addEventListener('mouseleave', () => {
  carousel.classList.remove('hover');
});

carousel.addEventListener('mouseenter', () => {
  carousel.classList.add('hover');
});