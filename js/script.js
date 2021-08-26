$(document).ready(function() {
  $('.header__burder-img').click(function() {
      $('.header__menu').toggleClass('menu__open');
      $('.header__button').toggleClass('menu__open');
      $('.header__burder-img').toggleClass('remove');
      $('body').toggleClass('fixed');
  });
});