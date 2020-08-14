import React from "react";
import styled from "styled-components";

import Heading from "../style/components/Text/Heading";
import StyledLink from "../style/components/StyledLink";
import Text from "../style/components/Text/Text";

const Wrapper = styled.div`
  height: 100%;
  max-width: 945px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Header = styled.nav`
  background: transparent;
  width: 100%;
  height: 86px;
`;

const NavCluster = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: auto;
  height: 100%;
`;

const ClusterButton = styled(StyledLink)`
  margin-left: 39px;

  &:first-child {
    margin-left: 0;
  }
`;

const NavBar = props => {
  return (
    <Header>
      <Wrapper>
        <StyledLink to="/">
          <Heading size="s" color="taupe">
            CAFFETARIUM
          </Heading>
        </StyledLink>
        <NavCluster>
          <ClusterButton to="/resources">
            <Text type="button" color="white">
              Resources
            </Text>
          </ClusterButton>
          <ClusterButton to="/about">
            <Text type="button" color="white">
              About
            </Text>
          </ClusterButton>
          <ClusterButton to="/contact">
            <Text type="button" color="white">
              Contact
            </Text>
          </ClusterButton>
        </NavCluster>
      </Wrapper>
    </Header>
  );
};

export default NavBar;
