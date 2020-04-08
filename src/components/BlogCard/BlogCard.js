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
`;

const Heading = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Title = styled.h1``;

const Subtitle = styled.h3``;

const Icon = styled.div`
  background: #fcf5ed;
  width: 56px;
  height: 56px;
  position: absolute;
  right: 16px;
  top: 32px;
`;

const Text = styled.p``;

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
