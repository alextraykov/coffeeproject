import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../colors";

const HeaderTag = styled.h1`
  ${props => {
    let settings = `
    font-family: Playfair Display;
    font-weight: bold;
    color:  ${props.color !== undefined ? colors[props.color] : colors.white};
  `;
    switch (props.size) {
      case "s":
        return settings.concat(`font-size: 20px;`);
      case "m":
        return settings.concat(`font-size: 28px;`);
      case "l":
        return settings.concat(`font-size: 40px;`);
      case "xl":
        return settings.concat(`font-size: 48px;`);
      default:
        console.warn("Forgot to specify the size of the heading");
        return settings.concat(`color: #FF0000;`);
    }
  }}
`;

const Heading = props => {
  return (
    <HeaderTag size={props.size} color={props.color} {...props}>
      {props.children}
    </HeaderTag>
  );
};

Heading.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string,
  className: PropTypes.string
};

export default Heading;
