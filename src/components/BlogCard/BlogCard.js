import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";

const Conatainer = styled.div`
  width: ${item => (item.large ? "100%" : "300px")};
  max-width: ${item => (item.large ? "950px" : "none")};
  height: ${item => (item.large ? "305px" : "345px")};
  display: flex;
  flex-direction: ${item => (item.large ? "row" : "column")};
  justify-content: flex-start;
  align-items: flex-start;
`;

const Image = styled.div`
  height: ${item => (item.large ? "100%" : "150px")};
  width: ${item => (item.large ? "305px" : "100%")};
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
`;

const Title = styled.h1`
  font-size: ${item => (item.large ? "28px" : "20px")};
  line-height: 27px;
  font-weight: bold;
  margin-bottom: 8px;
  letter-spacing: ${item => (item.large ? "0.05em" : "")};
`;

const Subtitle = styled.h3`
  font-size: ${item => (item.large ? "21px" : "18px")};
  line-height: ${item => (item.large ? "23px" : "21px")};
  color: #473e34;
  margin-bottom: 21px;
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
`;

const CoffeeSvg = styled.img``;

const Text = styled.p`
  font-size: 14px;
  line-height: 150%;
  color: #333333;
  max-width: ${item => (item.large ? "440px" : "")};
`;

const Button = styled(Link)`
  height: 40px;
  font-size: 16px;
  text-decoration: none;
  color: #473e34;
  border: 1px solid #473e34;
  padding: 6px 32px;
  margin-top: auto;
`;

const BlogCard = props => {
  return (
    <Conatainer large={props.large}>
      <Image src={props.featuredImage} large={props.large} />
      <TextBox large={props.large}>
        <Title large={props.large}>Test</Title>
        <Subtitle large={props.large}>Test</Subtitle>
        <Icon>
          <CoffeeSvg src={props.featuredImage} />
        </Icon>
        <Text large={props.large}>
          This method is meant to mimic a traditional pour over like a v60 or
          Beehouse. I find that this method is good for showing off sweetness
          and balance in the cup.
        </Text>
        <Button to="/test" activeStyle={{ color: "red" }}>
          Read the article
        </Button>
      </TextBox>
    </Conatainer>
  );
};

BlogCard.propTypes = {
  large: PropTypes.bool
};

export default BlogCard;
