function breakingNewsBigCard(object) {
  //   <div class="medium-card">
  //     <div class="medium-card-image">
  //       <img src="" />
  //     </div>
  //     <div class="medium-card-body">
  //       <h4>
  //
  //       </h4>
  //     </div>
  //   </div>;

  const { image_url, news, desc } = object;

  const card = document.createElement("div");
  const big_card_image = document.createElement("div");
  const big_card_body = document.createElement("div");

  const image = document.createElement("img");
  const title = document.createElement("h4");

  image.src = image_url;
  title.textContent = news;

  card.classList.add("medium-card");
  big_card_image.classList.add("medium-card-image");
  big_card_body.classList.add("medium-card-body");

  big_card_image.append(image);
  big_card_body.append(title);
  card.append(big_card_image, big_card_body);
  return card;
}

export default breakingNewsBigCard;
