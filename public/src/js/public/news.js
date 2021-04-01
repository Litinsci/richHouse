import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper from "swiper";
Swiper.use([Navigation, Pagination]);
document.querySelectorAll(".news").forEach(block=>{
    block.querySelectorAll('.news__slider').forEach(slider=>{
        var mySwiper = new Swiper(slider.querySelector('.swiper-container__news'), {
            // Optional parameters
            // direction: 'vertical',
            // loop: true,
            // centeredSlides: true,
            spaceBetween: 30,
          
            // Navigation arrows
            navigation: {
              nextEl: block.querySelector('.slider__button-next'),
              prevEl: block.querySelector('.slider__button-prev'),
            },

            breakpoints: {
                // when window width is >= 320px
                374: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                // when window width is >= 480px
                767: {
                  slidesPerView: 2,
                  spaceBetween: 30
                },
              }
          })
    })
    
})
