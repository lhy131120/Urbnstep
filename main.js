import Swiper from "swiper";
import "swiper/css";

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
});
