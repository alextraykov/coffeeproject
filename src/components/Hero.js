import React from "react";
import styled from "styled-components";

import GlobalStyle from "../style/global/GlobalStyle";
import Spacing from "../style/components/Spacing";

import Heading from "../style/components/Text/Heading";

import HeroImage from "../images/Heroimage.png";

const Wrapper = styled.div`
  max-width: 945px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const TextWrapper = styled.div`
  max-width: 550px;
`;

const Image = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    max-height: 538px;
    width: 43.88888888888889%;
    z-index: -1;
    background-image: url("${HeroImage}"); 
    background-repeat: no-repeat;
    // background-size: cover;
`;

const Hero = props => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <TextWrapper>
          <Heading size="xl" color="taupe">
            Lorem ipsum, sancti tut'im
          </Heading>
          <Spacing height="24px" />
          <Heading size="s" color="taupe" font="Roboto" weight="normal">
            Chemex brew specifically made for lighter roasts
          </Heading>
        </TextWrapper>
        <Spacing height="198px" />
        <Image />
      </Wrapper>
    </>
  );
};

export default Hero;
