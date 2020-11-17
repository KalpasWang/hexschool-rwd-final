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

  // 滑動到餐廳特色區域
  $('.nav__menu-link[href="index.html#feature"').click(function(event) {
    if($(document).attr('title').includes('首頁')) {
      event.preventDefault();      
      $('html,body').animate({
        scrollTop: $('#feature').offset().top
      }, 500);
    }
  });

  // 滑動到餐廳主廚區域
  $('.nav__menu-link[href="index.html#main-chief"').click(function(event) {
    if($(document).attr('title').includes('首頁')) {
      event.preventDefault();      
      $('html,body').animate({
        scrollTop: $('#main-chief').offset().top
      }, 500);
    }
  });

  // 滑動到餐廳訂位區域
  $('.nav__menu-link[href="index.html#ordering"').click(function(event) {
    if($(document).attr('title').includes('首頁')) {
      event.preventDefault();      
      $('html,body').animate({
        scrollTop: $('#ordering').offset().top
      }, 500);
    }
  });
});