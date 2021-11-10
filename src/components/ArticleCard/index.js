import React from "react";
import styled from "styled-components";
import { useStore } from "../../contexts/Store";
import Article from "../Article/index";

const ArticleCard = () => {
  const store = useStore();
  console.log(store);
  //Need to have each article as a url and have a route to link the articleCard to the articles.
  const goToArticle = (title) => {
    //use title to link to individual article
  };
  return (
    <Wrapper>
      {store.articles.map((articleInformation) => {
        <ArticleBox onClick={goToArticle(articleInformation.fields.title)}>
          <ArticleImage src="" alt="placeholder" />
          <ArticleName>{articleInformation.fields.title}</ArticleName>
          <ArticleCategory>
            {articleInformation.fields.category}
          </ArticleCategory>
        </ArticleBox>;
      })}
    </Wrapper>
  );

  return store.articles.map((articleInformation) => {
    return <Article articleInformation={articleInformation}></Article>;
  });
};

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
`;

const ArticleBox = styled.button`
  width: 100px;
  height: 200px;
`;
const ArticleImage = styled.img``;
const ArticleName = styled.div``;
const ArticleCategory = styled.div``;
export default ArticleCard;
