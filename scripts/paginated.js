document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: false,
      navigation: {
          nextEl: '#nextButton',
          prevEl: '#prevButton',
      },
      breakpoints: {
          640: {
              slidesPerView: 1,
              spaceBetween: 20
          },
          768: {
              slidesPerView: 2,
              spaceBetween: 20
          },
          1024: {
              slidesPerView: 3,
              spaceBetween: 20
          },
      }
  });
});
