$(document).ready(function() {
  $('.nav__mobile-menu-bars').click(function(){
    $('.nav__menu').toggleClass('menu-show');
    $('.fa-times').toggleClass('h-hide');
    $('.fa-bars').toggleClass('h-hide');
  })
});