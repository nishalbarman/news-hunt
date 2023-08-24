import React, { useEffect, useState } from "react";
import SmallTrendingCard from "./smallTrendingCard/SmallTrendingCard";
import BigTrendingCard from "./bigTrendingCard/BigTrendingCard";

export default function Trending() {
  //   const [trendingList, setTrendingList] = useState([]);
  const [trendingSmallOne, setTrendingSmallOne] = useState({});
  const [trendingSmallTwo, setTrendingSmallTwo] = useState({});
  const [trendingBig, setTrendingBig] = useState({});

  useEffect(() => {
    trendingAppend();
  }, []);

  const trendingAppend = async () => {
    const AUTHTOKEN = "xBUKcKnXfngfrqGoF93y";
    const ACCESS_TOKEN = "TjeNsXehJqhh2DGJzBY9";

    let query = "trending in assam";
    const API = `https://prod.api.etvbharat.com/catalog_lists/search-page-list?page=0&page_size=45&version=v2&response=r2&item_languages=asm&portal_state=assam&q=${query}&state=assam&auth_token=${AUTHTOKEN}&access_token=${ACCESS_TOKEN}`;

    const res = await fetch(API);
    let list = await res.json();
    list = list.data.catalog_list_items;

    console.log(list);

    let first = false;
    let second = false;
    let third = false;
    let c = 0;
    let count = 0;

    for (let i = 0; i < list.length; i++) {
      console.log(list[i]);
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
              setTrendingSmallOne(object);
              first = true;
            } else if (second == false) {
              setTrendingSmallTwo(object);
              second = true;
            } else if (first == true && second == true && third == false) {
              setTrendingBig(object);
              third = true;
            }
            c++;
            if (c >= 3) {
              break;
            }
          } catch (error) {
            console.log("blank objects");
          }
        }
      }
    }
  };

  return (
    <div id="trending-news">
      <div className="news-div-titles">
        <h3>TRENDING</h3>
      </div>
      <div className="news-breaking-cotainer">
        <div id="trending_small" className="breaking-cards-half">
          {/*---------------------------------------------*/}
          {/* First two card is going to be appended here */}
          {/*---------------------------------------------*/}

          <SmallTrendingCard {...trendingSmallOne} />
          <SmallTrendingCard {...trendingSmallTwo} />
        </div>

        {/*---------------------------------------------*/}
        {/* The big card is going to be appended here */}
        {/*---------------------------------------------*/}

        <BigTrendingCard {...trendingBig} />
      </div>
    </div>
  );
}
