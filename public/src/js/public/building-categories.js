import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper from "swiper";
Swiper.use([Navigation, Pagination]);
document.querySelectorAll(".building-categories").forEach(block=>{
    block.querySelectorAll('.building-categories__slider').forEach(slider=>{
        var mySwiper = new Swiper(slider.querySelector('.swiper-container__building'), {
            // Optional parameters
            // direction: 'vertical',
            loop: true,
            centeredSlides: true,
               spaceBetween: 30,
            // If we need pagination
            pagination: {
              el: slider.querySelector('.swiper-pagination'),
              clickable: true,
            },
          
            // Navigation arrows
            navigation: {
              nextEl: slider.querySelector('.slider__button-next'),
              prevEl: slider.querySelector('.slider__button-prev'),
            },
          })
    })
    
})
