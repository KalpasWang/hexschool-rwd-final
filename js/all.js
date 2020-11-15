$(document).ready(function() {

  // 選單收合
  $('.nav__mobile-menu-bars').click(function(){
    $('.nav__menu').toggleClass('menu-show');
    $('.fa-times').toggleClass('h-hide');
    $('.fa-bars').toggleClass('h-hide');
  })

  // 產品加入我的最愛
  $('.fa-heart').click(function(){
    $(this).toggleClass('h-icon-fill');
  })
});