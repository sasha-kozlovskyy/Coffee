/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';

// eslint-disable-next-line no-undef
const swiper = new Swiper('.testimonials-slider', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 130,
  pagination: false,
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  loop: true,
});

// eslint-disable-next-line no-undef
// eslint-disable-next-line no-unused-vars
const swip = new Swiper('.insta-slider', {
  slidesPerView: 6,
  spaceBetween: 10,
  freeMode: true,
  navigation: {
    nextEl: '.right',
    prevEl: '.left',
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 10,
    },

    700: {
      slidesPerView: 4,
      spaceBetween: 10,
    },

    1100: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
});
