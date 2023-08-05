/*--------------------------------------------------------*/
/*  All the imports are at top, imported form components  */
/*--------------------------------------------------------*/
import navbar from "../components/navbar.js";
import responsiveNess from "../components/navbarResponsive.js";
import closeMenu from "../components/closeMenu.js";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";
import trending_small_card from "/components/trending_small_cards.js";
import trending_big_card from "/components/trending_big_card.js";
import breakingBigCard from "/components/breaking_news_big_card.js";
import breakingMediumCard from "/components/breaking_news_medium_card.js";
import breakingVerticalSmall from "/components/breaking_small_card_vertical.js";
import getSliderCard from "/components/slider_card.js";
import getJibonXoiliCard from "/components/jibom_xoili_card.js";
/*--------------------------------------------------------*/
/*  All the imports are at top, imported has been done    */
/*--------------------------------------------------------*/

/*--------------------------------------------------------*/
/*  Auth and access token, here declared and initialised  */
/*--------------------------------------------------------*/

const AUTHTOKEN = "xBUKcKnXfngfrqGoF93y";
const ACCESS_TOKEN = "TjeNsXehJqhh2DGJzBY9";

/*---------------------------------------------------*/
/*  Auth token and access token has been initialised */
/*---------------------------------------------------*/

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
  trendingRequest(); // Making trending api request
  axomRequest(); // request and append breaking cards
  sliderRequest(); // request and append the slider
  countryRequest(); // request and append country news
  jibonXoiliAppend(); // append jibon xoili
  workOnBreakingButtons(); // working on tge buttons for breaking news
};

document.querySelector(".container").onclick = (event) => {
  closeMenu();
};

/*------------------------------------------------------*/
/*  To make a network reqeust to get trending cards     */
/*------------------------------------------------------*/

async function trendingRequest() {
  let query = "trending in assam";
  // const API = `https://api.npoint.io/d9de5e082d55215de18a/assamese_news`;
  const API = `https://prod.api.etvbharat.com/catalog_lists/search-page-list?page=0&page_size=45&version=v2&response=r2&item_languages=asm&portal_state=assam&q=${query}&state=assam&auth_token=${AUTHTOKEN}&access_token=${ACCESS_TOKEN}`;

  const res = await fetch(API);
  const data = await res.json();
  trendingAppend(data.data.catalog_list_items); // append trending cards
}

/*------------------------------------------------------*/
/*  To make a network reqeust to get coutntry cards     */
/*------------------------------------------------------*/

async function countryRequest() {
  let query = "india";
  const API = `https://prod.api.etvbharat.com/catalog_lists/search-page-list?page=0&page_size=45&version=v2&response=r2&item_languages=asm&portal_state=assam&q=${query}&state=assam&auth_token=${AUTHTOKEN}&access_token=${ACCESS_TOKEN}`;

  const res = await fetch(API);
  const data = await res.json();
  countryNewsAppend(data.data.catalog_list_items);
}

/*------------------------------------------------------*/
/*  To make a network reqeust to get axomiya cards     */
/*------------------------------------------------------*/

async function axomRequest(
  API = `https://prod.api.etvbharat.com/catalog_lists/app-new-headlines-home-assam.gzip?collective_ads_count=0&page=1&page_size=8&version=v2&response=r2&item_languages=asm&portal_state=assam&auth_token=${AUTHTOKEN}&access_token=${ACCESS_TOKEN}`
) {
  // const API = `https://prod.api.etvbharat.com/catalog_lists/search-page-list?page=0&page_size=45&version=v2&response=r2&item_languages=asm&portal_state=assam&q=${query}&state=assam&auth_token=${AUTHTOKEN}&access_token=${ACCESS_TOKEN}`;
  // the api below is helpfull to get the details of the card that we have got

  /* 
  
  const API = `https://prod.api.etvbharat.com/catalog_lists/web-news-details-assam.gzip?response=r2&item_languages=asm&page=0&page_size=10&content_id=assam20230801224341378378631&gallery_ad=false&scroll_no=0&state=assam&auth_token=${AUTHTOKEN}&access_token=${ACCESS_TOKEN}`;
  
   */

  const res = await fetch(API);
  const data = await res.json();
  // const [bigCard, midCard, ...rest] = data; // this will only work with my server list
  // console.log(bigCard, midCard, rest); // this will only work with my server list
  // breakingNewsAppend(bigCard, rest, midCard); // this will only work with my server list
  breakingNewsAppend(data.data.catalog_list_items);
}

/*------------------------------------------------------*/
/*  To make a network reqeust to get sliders  cards     */
/*------------------------------------------------------*/

async function sliderRequest() {
  let query = "world";
  const API = `https://prod.api.etvbharat.com/catalog_lists/search-page-list?page=0&page_size=45&version=v2&response=r2&item_languages=asm&portal_state=assam&q=${query}&state=assam&auth_token=${AUTHTOKEN}&access_token=${ACCESS_TOKEN}`;
  const res = await fetch(API);
  const data = await res.json();
  sliderAppend(data.data.catalog_list_items);
}

/*------------------------------------------------------*/
/*  It will take the trending card and append it to dom */
/*------------------------------------------------------*/

function trendingAppend(list) {
  const trendingSmall = document.querySelector("#trending_small");

  let first = false;
  let second = false;
  let third = false;
  let c = 0;
  let count = 0;

  for (let i = 0; i < list.length; i++) {
    if (c === 3) {
      console.log(`Trending all done. count ${c}`);
      break;
    }
    for (let j = 0; j < list[i].catalog_list_items.length; j++) {
      count++;
      if (list[i].message !== "No Items Present") {
        try {
          const {
            title: news,
            genres: category,
            keywords,
            publish_date_string,
            short_description: desc,
            thumbnails: {
              high_16_9: { url, alt_tags, caption },
            },
            web_url,
          } = list[i].catalog_list_items[j];

          let object = new createObject(
            news,
            keywords,
            category,
            publish_date_string,
            desc,
            url,
            web_url,
            alt_tags,
            caption
          );

          if (first == false) {
            trendingSmall.append(trending_small_card(object));
            first = true;
          } else if (second == false) {
            trendingSmall.append(trending_small_card(object));
            second = true;
          } else if (first == true && second == true && third == false) {
            trendingSmall.insertAdjacentElement(
              "afterend",
              trending_big_card(object)
            );
            third = true;
          }
          c++;
          console.log(c);
          if (c >= 3) {
            break;
          }
        } catch (error) {
          console.log("blank objects");
        }
      }
    }
  }
  console.log(`Here we iterated for ${count} times`);
}

/*------------------------------------------------------*/
/*  It will take the breaking card and append it to dom */
/*------------------------------------------------------*/

function breakingNewsAppend(list) {
  let bC = false;
  let mC = false;
  let count = 1;

  const appendVertical = document.querySelector(
    "#axom-breaking-vertical-append"
  );
  const breakingBig = document.querySelector("#axom-breaking-big-card-append");
  const breakingMedium = document.querySelector(
    "#axom-breaking-medium-card-append"
  );

  breakingBig.innerHTML = "";
  breakingMedium.innerHTML = "";

  /*-----------------------------------------------*/
  /* breaking_news vertical small cards            */
  /*-----------------------------------------------*/

  appendVertical.innerHTML = "";

  /*-----------------------------------------------*/
  /* New approach using direct api call            */
  /*-----------------------------------------------*/

  for (let i = 0; i < list.length; i++) {
    if (count >= 5) break;

    for (let j = 0; j < list[i].catalog_list_items.length; j++) {
      if (list[i].message !== "No Items Present") {
        try {
          const {
            title: news,
            genres: category,
            keywords,
            publish_date_string,
            short_description: desc,
            thumbnails: {
              high_16_9: { url, alt_tags, caption },
            },
            web_url,
          } = list[i].catalog_list_items[j];

          let object = new createObject(
            news,
            keywords,
            category,
            publish_date_string,
            desc,
            url,
            web_url,
            alt_tags,
            caption
          );
          if (bC == false) {
            breakingBig.append(breakingBigCard(object));
            bC = true;
          } else if (mC == false) {
            breakingMedium.append(breakingMediumCard(object));
            mC = true;
          } else if (mC == true && bC == true && count <= 5) {
            appendVertical.append(breakingVerticalSmall(object));
            const line = document.createElement("div");
            line.classList.add("horizontal-devider");
            appendVertical.append(line);
            count++;
          } else {
            break;
          }
          console.log(count);
        } catch (error) {
          console.log("blank objects");
        }
      }
    }
  }

  console.log(`I am iterated ${count} times`);
}

/*-----------------------------------------------*/
/* slider append, here onwards slider           */
/*----------------------------------------------*/

function sliderAppend(list) {
  const appendSlideCard = document.querySelector("#slider-apppend");
  appendSlideCard.innerHTML = "";
  let count = 1;
  for (let i = 0; i < list.length; i++) {
    if (count >= 20) break;

    for (let j = 0; j < list[i].catalog_list_items.length; j++) {
      if (list[i].message !== "No Items Present") {
        try {
          const {
            title: news,
            genres: category,
            keywords,
            publish_date_string,
            short_description: desc,
            thumbnails: {
              high_16_9: { url, alt_tags, caption },
            },
            web_url,
          } = list[i].catalog_list_items[j];

          let object = new createObject(
            news,
            keywords,
            category,
            publish_date_string,
            desc,
            url,
            web_url,
            alt_tags,
            caption
          );
          appendSlideCard.append(getSliderCard(object));
          count++;
          if (count >= 20) {
            break;
          }
        } catch (error) {
          console.log("blank objects");
        }
      }
    }
  }
}

/*-----------------------------------------------*/
/* country grid appending starts from here       */
/*-----------------------------------------------*/

function countryNewsAppend(list) {
  const appendCountryNews = document.querySelector("#country_news");

  let count = 0;

  appendCountryNews.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    if (count >= 20) break;

    for (let j = 0; j < list[i].catalog_list_items.length; j++) {
      if (list[i].message !== "No Items Present") {
        try {
          const {
            title: news,
            genres: category,
            keywords,
            publish_date_string,
            short_description: desc,
            thumbnails: {
              high_16_9: { url, alt_tags, caption },
            },
            web_url,
          } = list[i].catalog_list_items[j];

          let object = new createObject(
            news,
            keywords,
            category,
            publish_date_string,
            desc,
            url,
            web_url,
            alt_tags,
            caption
          );
          appendCountryNews.append(getSliderCard(object));
          count++;
          if (count >= 20) {
            break;
          }
        } catch (error) {
          console.log("blank objects");
        }
      }
    }
  }
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

/*-----------------------------------------------*/
/* Creating a required object from the response  */
/*-----------------------------------------------*/
function createObject(
  news,
  keywords,
  category,
  publish_date_string,
  desc,
  url,
  web_url,
  alt_tags,
  caption
) {
  let localDate = new Date(publish_date_string);

  this.news = news;
  this.keywords = keywords;
  this.category = category;
  this.publishedDate = publish_date_string;
  this.desc = desc;
  this.image_url = url;
  this.web_url = web_url;
  this.alt_tags = alt_tags;
  this.caption = caption;
}

/*-----------------------------------------------*/
/* Funciton for breaking news buttons  */
/*-----------------------------------------------*/
function workOnBreakingButtons() {
  const all = document.querySelector("#all");
  const nalbari = document.querySelector("#nalbari");
  const sonitpur = document.querySelector("#sonitpur");
  const gauhati = document.querySelector("#gauhati");
  const jorhat = document.querySelector("#jorhat");
  const dibrugarh = document.querySelector("#dibrugarh");

  all.addEventListener("click", (event) => {
    event.preventDefault();
    axomRequest();
    event.target.classList.add("active_news_button");
    nalbari.classList.remove("active_news_button");
    sonitpur.classList.remove("active_news_button");
    gauhati.classList.remove("active_news_button");
    jorhat.classList.remove("active_news_button");
    dibrugarh.classList.remove("active_news_button");
    addAnimation(event);
  });

  nalbari.addEventListener("click", (event) => {
    event.preventDefault();
    axomRequest(
      `https://prod.api.etvbharat.com/catalog_lists/search-page-list?page=0&page_size=45&version=v2&response=r2&item_languages=asm&portal_state=assam&q=nalbari&state=assam&auth_token=${AUTHTOKEN}&access_token=${ACCESS_TOKEN}`
    );
    event.target.classList.add("active_news_button");
    all.classList.remove("active_news_button");
    sonitpur.classList.remove("active_news_button");
    gauhati.classList.remove("active_news_button");
    jorhat.classList.remove("active_news_button");
    dibrugarh.classList.remove("active_news_button");
    addAnimation(event);
  });

  sonitpur.addEventListener("click", (event) => {
    event.preventDefault();
    axomRequest(
      `https://prod.api.etvbharat.com/catalog_lists/search-page-list?page=0&page_size=45&version=v2&response=r2&item_languages=asm&portal_state=assam&q=sonitpur&state=assam&auth_token=${AUTHTOKEN}&access_token=${ACCESS_TOKEN}`
    );
    event.target.classList.add("active_news_button");
    nalbari.classList.remove("active_news_button");
    all.classList.remove("active_news_button");
    gauhati.classList.remove("active_news_button");
    jorhat.classList.remove("active_news_button");
    dibrugarh.classList.remove("active_news_button");
    addAnimation(event);
  });

  gauhati.addEventListener("click", (event) => {
    event.preventDefault();
    axomRequest(
      `https://prod.api.etvbharat.com/catalog_lists/search-page-list?page=0&page_size=45&version=v2&response=r2&item_languages=asm&portal_state=assam&q=gauhati&state=assam&auth_token=${AUTHTOKEN}&access_token=${ACCESS_TOKEN}`
    );
    event.target.classList.add("active_news_button");
    nalbari.classList.remove("active_news_button");
    sonitpur.classList.remove("active_news_button");
    all.classList.remove("active_news_button");
    jorhat.classList.remove("active_news_button");
    dibrugarh.classList.remove("active_news_button");
    addAnimation(event);
  });

  jorhat.addEventListener("click", (event) => {
    event.preventDefault();
    axomRequest(
      `https://prod.api.etvbharat.com/catalog_lists/search-page-list?page=0&page_size=45&version=v2&response=r2&item_languages=asm&portal_state=assam&q=jorhat&state=assam&auth_token=${AUTHTOKEN}&access_token=${ACCESS_TOKEN}`
    );
    event.target.classList.add("active_news_button");
    nalbari.classList.remove("active_news_button");
    sonitpur.classList.remove("active_news_button");
    gauhati.classList.remove("active_news_button");
    all.classList.remove("active_news_button");
    dibrugarh.classList.remove("active_news_button");
    addAnimation(event);
  });

  dibrugarh.addEventListener("click", (event) => {
    event.preventDefault();
    axomRequest(
      `https://prod.api.etvbharat.com/catalog_lists/search-page-list?page=0&page_size=45&version=v2&response=r2&item_languages=asm&portal_state=assam&q=dibrugarh&state=assam&auth_token=${AUTHTOKEN}&access_token=${ACCESS_TOKEN}`
    );
    event.target.classList.add("active_news_button");
    nalbari.classList.remove("active_news_button");
    sonitpur.classList.remove("active_news_button");
    gauhati.classList.remove("active_news_button");
    jorhat.classList.remove("active_news_button");
    all.classList.remove("active_news_button");
    addAnimation(event);
  });
}

function addAnimation(event) {
  event.target.classList.add("shake-animation");
}
