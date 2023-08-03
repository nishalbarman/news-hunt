import navbar from "../components/navbar.js";
import responsiveNess from "../components/navbarResponsive.js";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

// here adding the slider code
// slider code stating
const swiper = new Swiper(".slide-container", {
  slidesPerView: 3,
  spaceBetween: 15,
  sliderPerGroup: 3,
  loop: false,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  centerInsufficientSlides: true,

  width: 1200,

  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      width: 250,
    },
    520: {
      slidesPerView: 2,

      width: 500,
    },
    768: {
      slidesPerView: 2.5,
      width: 1000,
    },
    1000: {
      slidesPerView: 3,
      width: 1200,
    },
  },
});
//slider code ended

window.onload = () => {
  document
    .querySelector(".container")
    .insertAdjacentHTML("beforebegin", navbar());
  responsiveNess();
  console.log(swiper);
  console.log("logo");
};
