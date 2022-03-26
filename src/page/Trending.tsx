import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// theme
import { Colors } from '../config/colors'

// sample icon
import userIcon from '../../public/assets/76c614a1fa.jpg';

// sample data
const sampleData = [
  {
    thumbnail: "🦄",
    title: "Falsy値を比較せずにそのまま判定に使うことはやめよう",
    userIcon: `${userIcon}`,
    userName: "catnose",
    ago: 3,
    readTime: 15,
    favorite: 217
  },
  {
    thumbnail: "🦄",
    title: "Falsy値を比較せずにそのまま判定に使うことはやめよう",
    userIcon: `${userIcon}`,
    userName: "catnose",
    ago: 3,
    readTime: 15,
    favorite: 217
  }
]

export const Trending = () => {
  return (
    <StyledTrendingContainer>
      <h3>Tech</h3>
      <StyledTrendingArticleInner>
        {sampleData.map((data) => (
          <StyledTrendingArticle>
            <Link to="/">
              <StyledTrendingThumbnail>
                {data.thumbnail}
              </StyledTrendingThumbnail>
            </Link>
            <div>
              <Link to="/">
                <StyledTrendingArticleTitle>
                  {data.title}
                </StyledTrendingArticleTitle>
              </Link>
              <StyledTrendingUserInner>
                <StyledTrendingArticleUserIcon>
                  <img src={data.userIcon} alt="" />
                </StyledTrendingArticleUserIcon>  
                <p>
                  <StyledArticleUserName>{data.userName}</StyledArticleUserName>
                  <StyledArticleInfo>
                    <time>{data.ago}日前</time>
                    <span>{data.readTime}分</span>
                    <span>❤︎{data.favorite}</span>
                  </StyledArticleInfo>
                </p>
              </StyledTrendingUserInner>
            </div>
          </StyledTrendingArticle>
        ))}
      </StyledTrendingArticleInner>
    </StyledTrendingContainer>
  )
}

const StyledTrendingContainer = styled.div`
  background-color: ${Colors.theme.page.trending.background};
  max-width: 960px;
  width: 100%;
  padding: 3.5rem 0;
  margin: 0 auto;
  height: 100vh;
`;

const StyledTrendingArticleInner = styled.div`
  margin-top: 1.1em;
  width: 830px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledTrendingArticle = styled.article`
  width: 400px;
  display: flex;
  justify-content: space-between;
`;

const StyledTrendingThumbnail = styled.div`
  background-color: ${Colors.theme.page.trending.thumbnail};
  width: 92px;
  height: 92px;
  font-size: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 15px;
  border-radius: 12px;
`;

const StyledTrendingArticleTitle = styled.h2`
  font-size: 1em;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 10px;
  color: ${Colors.theme.text.heading};
`;

const StyledTrendingUserInner = styled.div`
  width: 130px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledTrendingArticleUserIcon = styled.div`
    display: block;
    width: 30px;

    img { border-radius: 50%; }
`;

const StyledArticleUserName = styled.span`
  display: block;
  color: ${Colors.theme.text.paragraph};
  font-size: 13px;
`;

const StyledArticleInfo = styled.p`
  display: inline-block;
  color: ${Colors.theme.text.paragraph};
  font-size: 11.5px;
`;