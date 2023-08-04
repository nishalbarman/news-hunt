function trending_small(object) {
  const { news, publishedDate, image_url } = object;

  const card = document.createElement("div");
  const body = document.createElement("div");
  const title = document.createElement("p");
  const published = document.createElement("p");

  card.classList.add("breaking-card");

  //   card.style = `background-image: url(${image_url}); : center;background-repeat: no-repeat; background-size: cover;`;

  card.style.backgroundImage = `url('${image_url}')`;
  card.style.backgroundPosition = `center`;
  card.style.backgroundRepeat = `no-repeat`;
  card.style.backgroundSize = `cover`;

  title.textContent = news;
  published.textContent = publishedDate;

  body.append(title, published);
  card.append(body);

  return card;
}

export default trending_small;
