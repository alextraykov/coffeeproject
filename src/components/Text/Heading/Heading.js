import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Heading = props => {
  const HeaderTag = `h${props.size}`;
  const Header = styled(HeaderTag)`
    ${props => {
      let settings = `
      font-family: Inter;
      color: #000000;
    `;
      switch (props.size) {
        case 1:
          return settings.concat(`
        font-size: 14px;
        `);
        case 2:
          return settings.concat(`font-size: 18px;`);
        default:
          console.warn("Forgot to specify the size of the heading");
          return settings.concat(`color: #FF0000;`);
      }
    }}
  `;

  return <Header size={props.size}>test</Header>;
};

Heading.propTypes = {
  size: PropTypes.number.isRequired,
  className: PropTypes.string
};

export default Heading;
