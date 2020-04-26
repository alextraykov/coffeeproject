import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import NavBar from "./NavBar";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Layout = ({ children }) => {
  return (
    <>
      <NavBar siteTitle="Caffetarium" />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: "1300px"
        }}
      >
        <Main>{children}</Main>
        <footer>© {new Date().getFullYear()}, Alexander Traykov</footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
