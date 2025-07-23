import Swiper from "swiper";
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

import 'swiper/css/bundle';

import "./assets/scss/all.scss";

document.addEventListener("DOMContentLoaded", () => {


  if(document.querySelector(".hotsell")) {
    const swiper = new Swiper('.hotsell .swiper', {
      spaceBetween: 16,
      slidesPerView: 1.2,
      breakpoints: {
        540: {
          slidesPerView: 2.2,
          spaceBetween: 16
        },
        768: {
          slidesPerView: 3.2,
          spaceBetween: 24
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 24
        }
      }
    })
  }

  if(document.querySelector(".homeCallToAction")) {
    const swiper = new Swiper('.homeCallToAction .swiper', {
      modules: [Autoplay, EffectFade, Pagination],
      slidesPerView: 1,
      effect: "fade",
      crossFade: true,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true
      },
      pagination: {
        el: '.homeCallToAction .swiper-pagination',
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class=${className}>${index + 1}</span>`
        } 
      },
    })
  }
});
