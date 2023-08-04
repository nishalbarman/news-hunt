import breakingNewsBigCard from "./breaking_news_big_card.js";

function getSliderCard(object) {
  /* ---------------------------------------- */
  /* The html structure of the card           */
  /* ---------------------------------------- */

  /*
    <div class="big-card swiper-cards swiper-slide">
      <div class="big-card-image">
        <img src="https://images.news18.com/assam/uploads/2023/08/man-became-dog-2023-08-e049ea2098de79a3bf29e59013aa2386-3x2.jpg?impolicy=website&width=285&height=180" />
      </div>
      <div class="big-card-body">
        <h3>এজন ব্যক্তিৰ অদ্ভুদ ইচ্ছা! কুকুৰ হ’বলৈ খৰচ . . .</h3>
        <p>
          Man Became Dog: মানুহে কুকুৰ পোহা সচৰাচৰ দেখিবলৈ পোৱা যায়। কুকুৰ আগ্ৰহী
          আৰু বিশ্বাসী ব. . .
        </p>
      </div>
    </div>;

  */

  const card = breakingNewsBigCard(object);
  card.classList.add("swiper-cards", "swiper-slide");
  return card;
}

export default getSliderCard;
