// All the magic goes here

import 'bootstrap';

import GLightbox from 'glightbox';

import LocomotiveScroll from 'locomotive-scroll';

const lightbox = GLightbox({
  touchNavigation: true,
  loop: true,
  zoomable: true,
  openEffect: "fade"
});

const scroller = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});
