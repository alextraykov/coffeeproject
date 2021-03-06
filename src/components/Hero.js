import React from "react";
import styled from "styled-components";

import GlobalStyle from "../style/global/GlobalStyle";
import Spacing from "../style/components/Spacing";

import Heading from "../style/components/Text/Heading";
import Text from "../style/components/Text/Text";

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
  background-image: ${props => `url("${props.path}")`};
  background-repeat: no-repeat;
  background-size: cover;
`;

const Hero = props => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <TextWrapper>
          <Heading fs={48} lh={64} color="taupe">
            {props.heading}
          </Heading>
          <Spacing height="24px" />
          <Text fs={20} lh={24} color="taupe">
            {props.subHeading}
          </Text>
        </TextWrapper>
        <Spacing height="198px" />
        <Image path={props.image} />
      </Wrapper>
    </>
  );
};

export default Hero;
