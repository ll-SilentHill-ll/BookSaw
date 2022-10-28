const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.slider-arrow_right',
    prevEl: '.slider-arrow_left',
  },

  effect: 'fade',

  speed: 700,

  fadeEffect: {
    crossFade: true
  }
});

new Swiper('.featured1', {
  slidesPerView: 4,
  spaceBetween: 30,
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
