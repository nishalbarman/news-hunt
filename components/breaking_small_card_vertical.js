function breakingCardVertical(object) {
  const { image_url, news, desc } = object;

  const card = document.createElement("div");
  const big_card_image = document.createElement("div");
  const big_card_body = document.createElement("div");

  const image = document.createElement("img");
  const title = document.createElement("h4");

  image.src = image_url;
  title.textContent = news;

  card.classList.add("small-cards");
  big_card_image.classList.add("small-card-image-outer");

  big_card_image.append(image);
  big_card_body.append(title);
  card.append(big_card_image, big_card_body);

  return card;
}

export default breakingCardVertical;
