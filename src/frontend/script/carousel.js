// Inicializa Swiper (requiere que Swiper esté cargado antes de este script)
document.addEventListener('DOMContentLoaded', () => {
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper no está disponible. Asegúrate de incluir el script de Swiper.');
    return;
  }

  const swiper = new Swiper('.mySwiper', {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 20,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });
});