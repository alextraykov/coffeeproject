import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import colors from "../style/colors";
import Button from "./Button";
import Spacing from "../style/components/Spacing";

const Conatainer = styled.div`
  width: ${item => (item.large ? "100%" : "304px")};
  max-width: ${item => (item.large ? "950px" : "none")};
  height: ${item => (item.large ? "305px" : "345px")};
  display: flex;
  flex-direction: ${item => (item.large ? "row" : "column")};
  justify-content: flex-start;
  align-items: flex-start;
`;

const ImageWrapper = styled.div`
  height: ${item => (item.large ? "305px" : "150px")};
  width: ${item => (item.large ? "305px" : "100%")};
  overflow: hidden;
  flex-shrink: 0;
`;

const Image = styled.div`
  height: 100%;
  width: 100%;
  background: url("${item => {
    return item.src;
  }}");
  background-size: cover;
  background-position: center;
`;

const TextBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  padding: ${item => (item.large ? "32px" : "32px 16px")};
  background: ${colors.white};
`;

const Title = styled.h1`
  font-size: ${item => (item.large ? "28px" : "20px")};
  line-height: 27px;
  font-weight: bold;
  letter-spacing: ${item => (item.large ? "0.05em" : "")};
`;

const Subtitle = styled.h3`
  font-size: ${item => (item.large ? "21px" : "18px")};
  line-height: ${item => (item.large ? "23px" : "21px")};
  color: #473e34;
`;

const Icon = styled.div`
  background: #fcf5ed;
  width: 56px;
  height: 56px;
  position: absolute;
  right: 16px;
  top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const CoffeeSvg = styled.img``;

const Text = styled.p`
  font-size: 14px;
  line-height: 150%;
  color: #333333;
  max-width: ${item => (item.large ? "440px" : "")};
`;

const BlogCard = props => {
  const {
    path,
    title,
    featuredImage,
    icon,
    excerpt
  } = props.card.childMarkdownRemark.frontmatter;
  console.log(props.card.childMarkdownRemark);

  return (
    <Conatainer large={!!props.large}>
      <ImageWrapper large={!!props.large}>
        <Image src={featuredImage.childImageSharp.original.src} />
      </ImageWrapper>
      <TextBox large={!!props.large}>
        <Title large={!!props.large}>{title}</Title>
        <Spacing height="8px" />
        <Subtitle large={!!props.large}>Test</Subtitle>
        <Spacing height="16px" />
        <Icon>
          <CoffeeSvg src={icon.childImageSharp.original.src} />
        </Icon>
        <Text large={!!props.large}>{excerpt}</Text>
        <Spacing height="16px" />
        <Button path={path}>Read the article</Button>
      </TextBox>
    </Conatainer>
  );
};

BlogCard.propTypes = {
  large: PropTypes.bool,
  card: PropTypes.shape({
    relativePath: PropTypes.string,
    childMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        date: PropTypes.string,
        excerpt: PropTypes.string,
        featuredImage: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            original: PropTypes.shape({
              src: PropTypes.string
            })
          })
        }),
        path: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        title: PropTypes.string
      })
    })
  })
};

export default BlogCard;
