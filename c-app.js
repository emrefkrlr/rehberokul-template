$(document).ready(function() {
 
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
        spaceBetween: 0,
      },
    },
    navigation: {
      nextEl: '.popular-school-area > .swiper-button-next',
      prevEl: '.popular-school-area > .swiper-button-prev',
    },
  });


  var swiper = new Swiper('.swiper-container-last-comment', {
    slidesPerView: 1,
    slidesPerColumn: 2,
    spaceBetween: 0,
    // init: false,
    pagination: {
      el: 'swiper-container-last-comment > .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1024: {
        slidesPerColumn: 1,
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
    navigation: {
      nextEl: '.last-comment-area > .swiper-button-next',
      prevEl: '.last-comment-area > .swiper-button-prev',
    },
  });
   
});





