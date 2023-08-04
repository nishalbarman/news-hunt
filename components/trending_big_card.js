function trending_big_card(object) {
  //   <div
  //     class="middle-break-card"
  //     style="background-image: url('https://gumlet.assettype.com/asomiyapratidin%2F2023-08%2Fa6b06229-2d59-4b81-93df-aaa8f77b043b%2FARBaz.jpg?auto=format%2Ccompress&fit=max&format=webp&dpr=1.0&q=70&w=768'); background-position: center;background-repeat: no-repeat; background-size: cover;">
  //     <div>
  //       <p>বলিউড বিখ্যাত খান পৰিয়ালঃ নিজ পৰিয়ালৰ সন্দৰ্ভত আৰবাজ খানৰ মত</p>
  //       <p>3 Aug, 2023</p>
  //     </div>
  //   </div>;

  const { news, publishedDate, image_url } = object;

  const card = document.createElement("div");
  const body = document.createElement("div");
  const title = document.createElement("p");
  const published = document.createElement("p");

  card.classList.add("middle-break-card");

  card.style = `background-image: url(${image_url}); : center;background-repeat: no-repeat; background-size: cover;`;

  //   card.style.backgroundImage = `url('${image_url}')`;
  //   card.style.backgroundPosition = `center`;
  //   card.style.backgroundRepeat = `no-repeat`;
  //   card.style.backgroundSize = `cover`;

  title.textContent = news;
  published.textContent = publishedDate;

  body.append(title, published);
  card.append(body);

  return card;
}

export default trending_big_card;
