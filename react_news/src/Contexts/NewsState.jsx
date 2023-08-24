import { createContext, useState } from "react";

const newsContext = createContext();

const NewsState = ({ children }) => {
  const [breakingNewsList, setBreakingNewsList] = useState([]);
  const [trendingNewsList, setTrendingNewsList] = useState([]);
  const [countryNewsList, setCountryNewsList] = useState([]);
  const [worldNewsList, setWorldNewsList] = useState([]);

  return (
    <newsContext.Provider
      value={{
        breakingNews: {
          breakingNewsList,
          setBreakingNewsList,
        },
        trendingNews: {
          trendingNewsList,
          setTrendingNewsList,
        },
        countryNews: {
          countryNewsList,
          setCountryNewsList,
        },
        worldNews: {
          worldNewsList,
          setWorldNewsList,
        },
        AUTHTOKEN: "xBUKcKnXfngfrqGoF93y",
        ACCESS_TOKEN: "TjeNsXehJqhh2DGJzBY9",
      }}>
      {children}
    </newsContext.Provider>
  );
};

export const NewsContext = newsContext;
export default NewsState;
