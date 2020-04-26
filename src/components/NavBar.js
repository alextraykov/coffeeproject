import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const NavBar = ({ siteTitle }) => {
  const Header = styled.header`
    background: transparent;
  `;

  const Title = styled(Link)`
    color: #473e34;
    text-decoration: none;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  `;

  return (
    <Header>
      <div>
        <h1>
          <Title to="/">{siteTitle}</Title>
        </h1>
      </div>
    </Header>
  );
};

NavBar.propTypes = {
  siteTitle: PropTypes.string
};

NavBar.defaultProps = {
  siteTitle: ``
};

export default NavBar;
