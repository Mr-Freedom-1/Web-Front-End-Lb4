"use strict";

var handleDomContentLoaded = function handleDomContentLoaded() {
  var body = document.body;
  var header = document.querySelector('header');
  var burgerBtn = document.querySelector('header .nav-btn');
  var overlay = document.querySelector('.header .overlay');

  function handleBurgerClick() {
    if (header.classList.contains('is-active')) {
      closeNavigation();
    } else {
      openNavigation();
    }
  }

  function closeNavigation() {
    body.classList.remove('disable-scroll');
    header.classList.remove('is-active');
  }

  function openNavigation() {
    body.classList.add('disable-scroll');
    header.classList.add('is-active');
  }

  burgerBtn.addEventListener('click', handleBurgerClick);
  overlay.addEventListener('click', closeNavigation);
};

document.addEventListener('DOMContentLoaded', handleDomContentLoaded);