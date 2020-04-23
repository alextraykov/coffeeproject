import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Conatainer = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Image = styled.div`
  height: 150px;
  width: 100%;
  background: url("${props => props.src}");
  background-size: cover;
  background-position: center;
`;

const TextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  padding: 32px 16px;
`;

const Title = styled.h1`
  font-size: 20px;
  line-height: 27px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Subtitle = styled.h3`
  font-size: 18px;
  line-height: 21px;
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
  min-height: 150px;
`;

const Button = styled(Link)`
  height: 40px;
  font-size: 16px;
  text-decoration: none;
  color: #473e34;
  border: 1px solid #473e34;
  padding: 6px 32px;
  margin-top: 12px;
`;

const BlogCard = props => {
  return (
    <Conatainer>
      <Image src={props.featuredImage} />
      <TextBox>
        <Title>test</Title>
        <Subtitle>Test</Subtitle>
        <Icon>
          <CoffeeSvg src={props.featuredImage} />
        </Icon>
        <Text>
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

export default BlogCard;
