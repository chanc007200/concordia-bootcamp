import React, { useState, useEffect, useContext } from "react";
import { getAllArticles } from "../services/contentful";

export const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async function fetchArticles() {
      setArticles(await getAllArticles());
    })();
  }, []);

  // TODO: Update the method below to return the latest featured article from the list of articles
  useEffect(() => {
    getFeatured();
  }, []);
  //Setting latest to be the first index of a filtered array of featured articles. Then using moment to compare dates and return latest 1.
  const getFeatured = () => {
    const moment = require(`moment`);
    const featuredArticlesArray = articles.filter((article) => {
      return article.fields.featured === true;
    });
    console.log(featuredArticlesArray);
    if (featuredArticlesArray.length === 0) {
      return null;
    }
    let latestArticle = featuredArticlesArray[0];
    let latestArticleDate = moment(latestArticle.fields.date);

    for (let i = 1; i < featuredArticlesArray.length; i++) {
      let articleDate = moment(featuredArticlesArray[i].fields.date);
      if (articleDate.isAfter(latestArticleDate)) {
        latestArticleDate = articleDate;
        latestArticle = featuredArticlesArray[i];
      }
    }
    console.log("latest Article: ", latestArticle);
    return latestArticle;
  };

  return (
    <StoreContext.Provider
      value={{ featuredArticle, getFeaturedArticle: getFeatured, articles }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
