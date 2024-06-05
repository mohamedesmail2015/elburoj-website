// Start Slider 3
const swiperEl = document.querySelector("swiper-container");
Object.assign(swiperEl, {
  slidesPerView: 1,
  spaceBetween: 10,

  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    450: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
swiperEl.initialize();
// End Slider 3
