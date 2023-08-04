/*--------------------------------------------------------*/
/*  All the imports are at top, imported form components  */
/*--------------------------------------------------------*/
import navbar from "../components/navbar.js";
import responsiveNess from "../components/navbarResponsive.js";
import closeMenu from "../components/closeMenu.js";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";
import tending_small_card from "/components/trending_small_cards.js";
import tending_big_card from "/components/trending_big_card.js";
import breakingBigCard from "/components/breaking_news_big_card.js";
import breakingMediumCard from "/components/breaking_news_medium_card.js";
import breakingVerticalSmall from "/components/breaking_small_card_vertical.js";
import getSliderCard from "/components/slider_card.js";
import getJibonXoiliCard from "/components/jibom_xoili_card.js";
/*--------------------------------------------------------*/
/*  All the imports are at top, imported has been done    */
/*--------------------------------------------------------*/

/*---------------------------------------------------*/
/*  Slider is added using swiper.js, here it starts  */
/*---------------------------------------------------*/

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

/*---------------------------------------------------*/
/*  Slider ended here, all everything is done        */
/*---------------------------------------------------*/

window.onload = () => {
  document
    .querySelector(".container")
    .insertAdjacentHTML("beforebegin", navbar()); // populating navbar
  responsiveNess(); // Making the navbar responsive for mobile
  trendingAppend(); // append trending cards
  breakingNewsAppend(); // append breaking cards
  sliderAppend(); // append the slider
  countryNewsAppend(); // append country news
  jibonXoiliAppend(); // append jibon xoili
};

document.querySelector(".container").onclick = (event) => {
  closeMenu();
};

/*------------------------------------------------------*/
/*  It will take the trending card and append it to dom */
/*------------------------------------------------------*/

function trendingAppend() {
  const trendingSmall = document.querySelector("#trending_small");
  trendingSmall.append(
    tending_small_card({
      news: "কৰিমগঞ্জত ৪ কোটি টকাৰ হেৰ'ইনসহ বাহন জব্দ : আটক সৰবৰাহকাৰী",
      publishedDate: "3 Aug, 2023",
      image_url:
        "https://gumlet.assettype.com/asomiyapratidin%2F2023-08%2F73bd8cc0-b888-48b7-aed2-8151e81a3f31%2Fdrug.jpg?auto=format%2Ccompress&fit=max&format=webp&dpr=1.0&q=70&w=576",
    })
  );
  trendingSmall.append(
    tending_small_card({
      news: "বলিউড বিখ্যাত খান পৰিয়ালঃ নিজ পৰিয়ালৰ সন্দৰ্ভত আৰবাজ খানৰ মত",
      image_url:
        "https://gumlet.assettype.com/asomiyapratidin%2F2023-07%2F1e6341eb-9f13-4e4f-8eab-541a4cfbb2b3%2FAP_FOR_WEB________________.jpg?auto=format%2Ccompress&fit=max&format=webp&dpr=1.0&q=70&w=768",

      publishedDate: "16 July 2023",
    })
  );

  trendingSmall.insertAdjacentElement(
    "afterend",
    tending_big_card({
      news: "বলিউড বিখ্যাত খান পৰিয়ালঃ নিজ পৰিয়ালৰ সন্দৰ্ভত আৰবাজ খানৰ মত",
      image_url:
        "https://gumlet.assettype.com/asomiyapratidin%2F2023-07%2F1e6341eb-9f13-4e4f-8eab-541a4cfbb2b3%2FAP_FOR_WEB________________.jpg?auto=format%2Ccompress&fit=max&format=webp&dpr=1.0&q=70&w=768",

      publishedDate: "3 Aug 2023",
    })
  );
}

/*------------------------------------------------------*/
/*  It will take the breaking card and append it to dom */
/*------------------------------------------------------*/

function breakingNewsAppend(
  bigCardObj,
  list = [
    {
      news: " ৰে'লৰ এ চি দবাত যান্ত্ৰিক বিজুতি : অসমৰ এটা ৰে'লপথত ঘটে সঘনাই এই ঘটনা",
      image_url:
        "https://images.news18.com/assam/uploads/2023/08/silchar-ghy-rail-2023-08-846b87e6099636a3759b56aa39e349df-3x2.jpg?impolicy=website&width=80&height=54",
    },
  ],
  mediumCard
) {
  const breakingBig = document.querySelector("#axom-breaking-big-card-append");
  const breakingMedium = document.querySelector(
    "#axom-breaking-medium-card-append"
  );
  breakingBig.append(
    breakingBigCard({
      image_url:
        "https://images.news18.com/assam/uploads/2023/08/Encounter-2023-08-1bbe086cacc4b0d9dae5cec13679843e-3x2.jpg?impolicy=website&width=490&height=326",
      news: "গুলী খায়ো DIG ৰ মোবাইল ক'ত বিক্ৰী কৰিলে স্বীকাৰ কৰা নাই অভিজিত ৰাভাই",
      desc: "গুলী খায়ো DIGৰ মোবাইলৰ সন্ধান দিয়া নাই অভিজিৎ ৰাভাই। মহানগৰীত চুৰি মোবাইল কিনা খলনায়কো গুলীবিদ্ধ। একে নিশাই দুটা মোবাইল চোৰক গুলীবিদ্ধ কৰি অপৰাধীক কঠোৰ সকিয়নি মহানগৰ আৰক্ষীৰ",
    })
  );

  /*-----------------------------------------------*/
  /* breaking_news vertical small cards            */
  /*-----------------------------------------------*/
  const appendVertical = document.querySelector(
    "#axom-breaking-vertical-append"
  );
  appendVertical.innerHTML = "";
  list.forEach((element) => {
    appendVertical.append(breakingVerticalSmall(element));

    const line = document.createElement("div");
    line.classList.add("horizontal-devider");
    appendVertical.append(line);
  });

  breakingMedium.append(
    breakingMediumCard({
      image_url:
        "https://images.news18.com/assam/uploads/2023/08/1691048128_1690872649_train4-3x2.jpg?impolicy=website&width=198&height=130",
      news: " Indian Railway Rule : সাৱধান! ৰে’ল যাত্ৰাত নিষিদ্ধ এই ৫বিধ সামগ্ৰী",
    })
  );
}

/*-----------------------------------------------*/
/* slider append, here onwards slider           */
/*----------------------------------------------*/

function sliderAppend(
  list = [
    {
      news: "এজন ব্যক্তিৰ অদ্ভুদ ইচ্ছা! কুকুৰ হ’বলৈ খৰচ . . .",
      image_url:
        "https://images.news18.com/assam/uploads/2023/08/man-became-dog-2023-08-e049ea2098de79a3bf29e59013aa2386-3x2.jpg?impolicy=website&width=285&height=180",
      desc: "Man Became Dog: মানুহে কুকুৰ পোহা সচৰাচৰ দেখিবলৈ পোৱা যায়। কুকুৰ আগ্ৰহী আৰু বিশ্বাসী ব. . .",
    },
  ]
) {
  const appendSlideCard = document.querySelector("#slider-apppend");
  appendSlideCard.innerHTML = "";
  list.forEach((element) => {
    appendSlideCard.append(getSliderCard(element));
  });
}

/*-----------------------------------------------*/
/* country grid appending starts from here       */
/*-----------------------------------------------*/

function countryNewsAppend(
  list = [
    {
      news: "বাৰিষাৰ দিনত পৰাপক্ষত আটা মাৰি ফ্ৰীজত নথ’ব",
      image_url:
        "https://gumlet.assettype.com/asomiyapratidin%2F2023-08%2F45da3f57-628f-49cd-9e18-ade578bf6745%2FAP_FOR_WEB_________.jpg?auto=format%2Ccompress&fit=max&format=webp&dpr=1.0&q=70&w=300",
      desc: "Man Became Dog: মানুহে কুকুৰ পোহা সচৰাচৰ দেখিবলৈ পোৱা যায়। কুকুৰ আগ্ৰহী আৰু বিশ্বাসী ব. . .",
    },
    {
      news: "বাস্তুৰ মতে এল’ভেৰা কিদৰে ৰোপন কৰিব লাগে জানেনে ?",
      image_url:
        "https://gumlet.assettype.com/asomiyapratidin%2F2023-08%2F079bc7fe-343c-4226-8f9c-2ab41d2381d2%2FAP_FOR_WEB_________.jpg?auto=format%2Ccompress&fit=max&format=webp&dpr=1.0&q=70&w=300",
      desc: "Man Became Dog: মানুহে কুকুৰ পোহা সচৰাচৰ দেখিবলৈ পোৱা যায়। কুকুৰ আগ্ৰহী আৰু বিশ্বাসী ব. . .",
    },
    {
      news: "বৰ্তমানলৈ দান কৰিছে ১,৫৯৯.৬৮ লিটাৰ গাখীৰ, হাজাৰ হাজাৰ শিশুৰ ভৰাইছে পেট",
      image_url:
        "https://gumlet.assettype.com/asomiyapratidin%2F2023-08%2Fd52b3a49-20da-401d-8c54-4316f5f52157%2Fworld_record.jpg?auto=format%2Ccompress&fit=max&format=webp&dpr=1.0&q=70&w=300",
      desc: "Man Became Dog: মানুহে কুকুৰ পোহা সচৰাচৰ দেখিবলৈ পোৱা যায়। কুকুৰ আগ্ৰহী আৰু বিশ্বাসী ব. . .",
    },
    {
      news: "জীৱনটোক নতুনকৈ সজাবলৈ আকৌ প্ৰেমিকা বিচাৰিছে ৰাহুল মহাজনে",
      image_url:
        "https://gumlet.assettype.com/asomiyapratidin%2F2023-08%2F74156e89-1707-40e1-81c3-e194c3bb03b9%2FAP_FOR_WEB__rahul.jpg?auto=format%2Ccompress&fit=max&format=webp&dpr=1.0&q=70&w=300",
      desc: "Man Became Dog: মানুহে কুকুৰ পোহা সচৰাচৰ দেখিবলৈ পোৱা যায়। কুকুৰ আগ্ৰহী আৰু বিশ্বাসী ব. . .",
    },
  ]
) {
  const appendCountryNews = document.querySelector("#country_news");
  appendCountryNews.innerHTML = "";
  list.forEach((element) => {
    appendCountryNews.append(getSliderCard(element));
  });
}

/*-----------------------------------------------*/
/* jibon xoli,  appending starts from here       */
/*-----------------------------------------------*/

function jibonXoiliAppend(
  list = [
    {
      news: "নুমলীগড় শোধনাগাৰৰ মুখ্য প্ৰৱেশদ্বাৰত শ্ৰমিক ইউনিয়নৰ তীব্ৰ প্ৰতিবাদ",
      image_url:
        "https://gumlet.assettype.com/asomiyapratidin%2F2023-08%2F62357551-8029-4d85-ac1b-54943a757d61%2Fnumaligarah.jpg?auto=format%2Ccompress&fit=max&format=webp&w=160&dpr=1.0",
      publishedDate: "65 minutes ago",
    },
    {
      news: "বাস্তুৰ মতে এল’ভেৰা কিদৰে ৰোপন কৰিব লাগে জানেনে ?",
      image_url:
        "https://gumlet.assettype.com/asomiyapratidin%2F2023-08%2F079bc7fe-343c-4226-8f9c-2ab41d2381d2%2FAP_FOR_WEB_________.jpg?auto=format%2Ccompress&fit=max&format=webp&dpr=1.0&q=70&w=300",
      publishedDate: "65 minutes ago",
    },
    {
      news: "আৰক্ষী বিষয়া মুছলেহউদ্দিন আহমেদৰ ধৰ্মীয় উদাৰতাঃ নামঘৰৰ পিছত নিৰ্মাণ কৰিলে শিৱমন্দিৰ...",
      image_url:
        "https://gumlet.assettype.com/asomiyapratidin%2F2023-08%2F14e04337-12a0-4e44-b1b2-c50f1dac8a72%2FAP_FOR_WEB_new.jpg?auto=format%2Ccompress&fit=max&format=webp&w=160&dpr=1.0",
      publishedDate: "70 minutes ago",
    },
    {
      news: "আৰক্ষী বিষয়া মুছলেহউদ্দিন আহমেদৰ ধৰ্মীয় উদাৰতাঃ নামঘৰৰ পিছত নিৰ্মাণ কৰিলে শিৱমন্দিৰ...",
      image_url:
        "https://gumlet.assettype.com/asomiyapratidin%2F2023-08%2F14e04337-12a0-4e44-b1b2-c50f1dac8a72%2FAP_FOR_WEB_new.jpg?auto=format%2Ccompress&fit=max&format=webp&w=160&dpr=1.0",
      desc: "70 minutes ago",
    },
  ]
) {
  const jibonXoili = document.querySelector("#jibon-xoili-append");
  jibonXoili.innerHTML = "";
  list.forEach((element) => {
    jibonXoili.append(getJibonXoiliCard(element));
  });
}
