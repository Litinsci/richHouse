import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper from "swiper";
Swiper.use([Navigation, Pagination]);
document.querySelectorAll(".stocks").forEach(block=>{
    block.querySelectorAll('.stocks__slider').forEach(slider=>{
        var mySwiper = new Swiper(slider.querySelector('.swiper-container__stocks'), {
            // Optional parameters
            // direction: 'vertical',
            // loop: true,
            // centeredSlides: true,
               spaceBetween: 30,
            // If we need pagination
            pagination: {
              el: slider.querySelector('.swiper-pagination'),
              clickable: true,
            },
          
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
                // when window width is >= 640px
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 40
                }
              }
          })
    })
    
})
