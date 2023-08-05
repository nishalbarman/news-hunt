function breakingNewsBigCard(object) {
  const { image_url, news, desc } = object;

  const card = document.createElement("div");
  const big_card_image = document.createElement("div");
  const big_card_body = document.createElement("div");

  const image = document.createElement("img");
  const title = document.createElement("h3");
  const description = document.createElement("p");

  image.src = image_url;
  title.textContent = news;
  description.innerHTML = desc;

  card.classList.add("big-card");
  big_card_image.classList.add("big-card-image");
  big_card_body.classList.add("big-card-body");

  big_card_image.append(image);
  big_card_body.append(title, description);
  card.append(big_card_image, big_card_body);
  return card;
}

export default breakingNewsBigCard;
