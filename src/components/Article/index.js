import React from "react";
import styled from "styled-components";

const Article = ({ articleInformation }) => {
  console.log(articleInformation);
  const moment = require(`moment`);

  const date = moment(articleInformation.fields.date.slice(0, 10)); //Only taking the date part
  //use Params to get the url to render the individual article.
  return (
    <ArticleWrapper>
      <ArticleHeader>
        <ArticleTitle>{articleInformation.fields.title}</ArticleTitle>
        <ArticleAuthor>By {articleInformation.fields.author}</ArticleAuthor>
        <ArticleDate>Written on {date.format("LL")}</ArticleDate>
      </ArticleHeader>
      <ArticleContent>{articleInformation.fields.content}</ArticleContent>
    </ArticleWrapper>
  );
};

const ArticleTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
const ArticleAuthor = styled.div``;
const ArticleDate = styled.div``;
const ArticleHeader = styled.div`
  margin-bottom: 50px;
`;
const ArticleContent = styled.div``;
const ArticleWrapper = styled.div`
  border: 1px solid black;
`;
export default Article;
