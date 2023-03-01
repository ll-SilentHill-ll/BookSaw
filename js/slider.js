const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop:true,
  navigation: {
    nextEl: '.slider_arrow_left',
    prevEl: '.slider_arrow_right',
  },

  autoplay: {
    delay: 5000,
    disableOnInteracrion: true,
  },

  effect: 'fade',

  speed: 1200,

  fadeEffect: {
    crossFade: true
  }

});

new Swiper('.featured1', {
  slidesPerView: 4,
  spaceBetween: 1,
  breakpoints: {
   // when window width is >= 320px
   320: {
     slidesPerView: 1,
     spaceBetween: 140
   },
   // when window width is >= 480px
   480: {
     slidesPerView: 3,
     spaceBetween: 0,
   },

   1420: {
     slidesPerView: 4,
     spaceBetween: 40,
   },
   // when window width is >= 640px
 },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  loop: true,

  speed: 700,
});

new Swiper('.offers1', {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination2',
    clickable: true,
    dynamicBullets: true,
  },

  loop: true,

  speed: 700,
});
