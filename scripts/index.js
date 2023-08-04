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
  axomRequest(); // Trending news network request
  // breakingNewsAppend(); // append breaking cards
  sliderAppend(); // append the slider
  countryNewsAppend(); // append country news
  jibonXoiliAppend(); // append jibon xoili
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
/*  To make a network reqeust to get axomiya cards     */
/*------------------------------------------------------*/

async function axomRequest() {
  // const API = `https://api.npoint.io/d9de5e082d55215de18a/assamese_news`;
  const API = `https://prod.api.etvbharat.com/catalog_lists/app-new-headlines-home-assam.gzip?collective_ads_count=0&page=1&page_size=8&version=v2&response=r2&item_languages=asm&portal_state=assam&auth_token=${AUTHTOKEN}&access_token=${ACCESS_TOKEN}`;

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
