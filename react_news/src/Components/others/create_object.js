import { create } from "json-server";

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

export default createObject;
