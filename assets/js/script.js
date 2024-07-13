'use strict';

/**
 * Add Event on elements
 */
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * Navbar toggle
 */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNavbar);

/**
 * Header & back top btn show when scroll down to 100px
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");
const textLogo = document.querySelector("[data-text-logo]");
const imgLogo = document.querySelector("[data-logo-img]");

const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    imgLogo.classList.add("active");
    textLogo.classList.add("text-logo-hidden");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
    textLogo.classList.remove("text-logo-hidden");
    imgLogo.classList.remove("active");
  }
};

addEventOnElem(window, "scroll", headerActive);

const carousel = document.querySelector(".slideParent");

carousel.addEventListener('mouseleave', () => {
  carousel.classList.remove('hover');
});

carousel.addEventListener('mouseenter', () => {
  carousel.classList.add('hover');
});

// Access the Images
let slideImages = document.querySelectorAll('.slide-container .slides img');
// Access the next and prev buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
// Access the indicators
let dots = document.querySelectorAll('.dot');

var counter = 0;

// Code for next button
next.addEventListener('click', slideNext);
function slideNext() {
  slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
  if (counter >= slideImages.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
  indicators();
}

// Code for prev button
prev.addEventListener('click', slidePrev);
function slidePrev() {
  slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
  if (counter == 0) {
    counter = slideImages.length - 1;
  } else {
    counter--;
  }
  slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
  indicators();
}

// Auto sliding
let deletInterval;
function autoSliding() {
  deletInterval = setInterval(timer, 3000);
  function timer() {
    slideNext();
    indicators();
  }
}
autoSliding();

// Stop auto sliding when mouse is over
const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function () {
  clearInterval(deletInterval);
});

// Resume sliding when mouse is out
container.addEventListener('mouseout', autoSliding);

// Add and remove active class from the indicators
function indicators() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  dots[counter].className += ' active';
}

// Add click event to the indicator
function switchImage(currentImage) {
  currentImage.classList.add('active');
  var imageId = currentImage.getAttribute('attr');
  if (imageId > counter) {
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
  } else if (imageId == counter) {
    return;
  } else {
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
  }
  indicators();
}

function toggleTeamMembers() {
  const teamMembers = document.querySelectorAll('.team-member');
  teamMembers.forEach((member, index) => {
    if (index >= 6) {
      member.style.display = member.style.display === 'none' ? 'block' : 'none';
    }
  });

  const button = document.getElementById('view-less');
  button.textContent = button.textContent === 'View More' ? 'View Less' : 'View More';
}
