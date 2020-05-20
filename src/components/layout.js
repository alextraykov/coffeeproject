import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import NavBar from "./NavBar";
import Footer from "./Footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Main = styled.main`
  width: 100%;
  max-width: 945px;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <NavBar siteTitle="CAFFETARIUM" />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
