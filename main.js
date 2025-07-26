import Swiper from "swiper";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css/bundle";

import "./assets/fonts/icomoon.css";
import "./assets/scss/all.scss";

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelectorAll('.btn-heart')) {
    const btns = document.querySelectorAll('.btn-heart');
    btns.forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        btn.classList.toggle('active');
        const span = btn.querySelector('span');
        if (btn.classList.contains('active')) {
          span.textContent = '己收藏';
        } else {
          span.textContent = '加入收藏';
        }
      })
    })
  }
  if (document.querySelector(".hotsell")) {
    const swiper = new Swiper(".hotsell .swiper", {
      spaceBetween: 16,
      slidesPerView: 1.2,
      breakpoints: {
        540: {
          slidesPerView: 2.2,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 3.2,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },
    });
  }

  if (document.querySelector(".homeCallToAction")) {
    const swiper = new Swiper(".homeCallToAction .swiper", {
      modules: [Autoplay, EffectFade, Pagination],
      slidesPerView: 1,
      effect: "fade",
      crossFade: true,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: ".homeCallToAction .swiper-pagination",
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class=${className}>${index + 1}</span>`;
        },
      },
    });
  }

  if (document.querySelector(".wearStyle")) {
    const imgBlks = document.querySelectorAll(".wearStyle .imgBlk");
    let arr = [];

    imgBlks.forEach((blk) => {
      const img = blk.querySelector("img");
      img ? arr.push(img.getAttribute("src")) : null;
    });

    if (document.querySelector(".wearStyle .swiper")) {
      const swiper = document.querySelector('.wearStyle .swiper')
      const wrapper = document.createElement("div");
      wrapper.classList.add("swiper-wrapper");

      arr.forEach((item) => {
        const slide = document.createElement("div");
        const img = document.createElement("img");
        slide.classList.add("swiper-slide");
        img.setAttribute('src', item)
        slide.appendChild(img)
        wrapper.appendChild(slide)
      });

      swiper.appendChild(wrapper);

      const wearStyleSwiper = new Swiper(swiper, {
        slidesPerView: 1.2,
        spaceBetween: 16,
        breakpoints: {
          540: {
            slidesPerView: 2.2
          }
        }
      })
    }
  }
});
