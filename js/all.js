$(document).ready(function() {
  $('.menu-bars').click(function(){
    $('nav').toggleClass('menu-show');
    $('.fa-times').toggleClass('d-none');
    $('.fa-bars').toggleClass('d-none');
  })
});