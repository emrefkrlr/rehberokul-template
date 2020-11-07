$(document).ready(function() {

   $('.menu-toggle').click(function(){
      $(".nav").toggleClass("mobile-nav");
      $(this).toggleClass("is-active");
   });

   var imgNum = 3;

   function right(){
      if (imgNum != 12) {
         imgNum +=1;
         changeImg(imgNum, -1);
      }
      else {
         imgNum = 1;
         changeImg(imgNum, +2);
      }
   }

   function left() {
      if (imgNum !=1){
         imgNum -=1;
         changeImg(imgNum, +1);
      }
      else{
         imgNum = 12;
         changeImg(imgNum,-2);
      }
   }

   function changeImg(value, count) {
      document.getElementById('')
      
   }

   var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    
});


 