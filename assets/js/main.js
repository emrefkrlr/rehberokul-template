$(document).ready(function() {

   $('.menu-toggle').click(function(){
      $(".navbar").toggleClass("mobile-nav");
      $(this).toggleClass("is-active");
   });


   var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      slidesPerColumn: 2,
      spaceBetween: 0,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 0,
        },
        1024: {
          slidesPerColumn: 2,
          slidesPerView: 4,
          spaceBetween: -7,
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });


    var swiper = new Swiper('.swiper-container-last-comment', {
      slidesPerView: 1,
      slidesPerColumn: 2,
      spaceBetween: 0,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 0,
        },
        1024: {
          slidesPerColumn: 1,
          slidesPerView: 4,
          spaceBetween: 0,
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

  
});


 