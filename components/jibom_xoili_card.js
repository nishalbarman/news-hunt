function getJibonXoiliCard(object) {
  //   <div class="news-grid-card">
  //     <div class="news-grid-image-outer">
  //       <img
  //         src="https://gumlet.assettype.com/asomiyapratidin%2F2023-08%2F8cc3b10d-880b-4ad1-838f-e47b76c58ac9%2Fnatak.jpg?auto=format%2Ccompress&fit=max&format=webp&w=160&dpr=1.0"
  //         alt=""
  //       />
  //     </div>
  //     <div class="news-grid-body">
  //       <h5></h5>
  //       <h4>নাট্যশিল্পী ৰাজ মেধিৰ সোৱঁৰণত অনুষ্ঠিত নাট কৰ্মশালাৰ সামৰণি </h4>
  //       <h5>42 minutes ago</h5>
  //     </div>
  //   </div>;

  const { image_url, news, publishedDate } = object;

  const card = document.createElement("div");
  const big_card_image = document.createElement("div");
  const big_card_body = document.createElement("div");

  const image = document.createElement("img");
  const category = document.createElement("h5");
  const title = document.createElement("h4");
  const date = document.createElement("h5");

  image.src = image_url;
  category.textContent = "জীৱনশৈলী";
  title.textContent = news;
  date.textContent = publishedDate;

  card.classList.add("news-grid-card");
  big_card_image.classList.add("news-grid-image-outer");
  big_card_body.classList.add("news-grid-body");

  big_card_image.append(image);
  big_card_body.append(category, title, date);
  card.append(big_card_image, big_card_body);

  return card;
}

export default getJibonXoiliCard;
