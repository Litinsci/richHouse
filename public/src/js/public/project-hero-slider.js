import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper from "swiper";
Swiper.use([Navigation, Pagination]);
document.querySelectorAll(".project-hero").forEach(block=>{
    block.querySelectorAll('.project-hero__slider-wrapper').forEach(slider=>{
        var mySwiper = new Swiper(slider.querySelector('.project-hero__slider'), {
               spaceBetween: 30,
            // If we need pagination
            pagination: {
              el: slider.querySelector('.project-hero__slider-pagination'),
              clickable: true,
            },
          
            // Navigation arrows
            navigation: {
              nextEl: block.querySelector('.slider__button-next'),
              prevEl: block.querySelector('.slider__button-prev'),
            },
          })
    })
    
})
