import React from "react";
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
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 150%;
  color: ##333333;
`;

const BlogCard = props => {
  return (
    <Conatainer>
      <Image src={props.imgData.original.src} />
      <TextBox>
        <Title>test</Title>
        <Subtitle>Test</Subtitle>
        <Icon />
        <Text>
          This method is meant to mimic a traditional pour over like a v60 or
          Beehouse. I find that this method is good for showing off sweetness
          and balance in the cup.
        </Text>
      </TextBox>
    </Conatainer>
  );
};

export default BlogCard;
