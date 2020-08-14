import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../colors";
import Spacing from "../Spacing";

const HeaderTag = styled.h1`
  ${props => {
    let settings = `
    font-family: ${!!props.font ? `${props.font}` : "Playfair Display"};
    font-weight: ${!!props.weight ? `${props.weight}` : "bold"};
    color:  ${!!props.color ? colors[props.color] : colors.white};
  `;
    switch (props.size) {
      case "s":
        return settings.concat(`
          font-size: 20px;
          line-height: 23px;
        `);
      case "m":
        return settings.concat(`
          font-size: 28px;
          line-height: 37px;
        `);
      case "l":
        return settings.concat(`
          font-size: 40px;
          line-height: 53px;
        `);
      case "xl":
        return settings.concat(`
          font-size: 48px;
          line-height: 64px;
        `);
      default:
        console.warn("Forgot to specify the size of the heading");
        return settings.concat(`color: #FF0000;`);
    }
  }}
`;

const Underline = styled.div`
  height: 1px;
  width: 141px;
  background: ${colors.taupe};
`;

const Heading = props => {
  return (
    <>
      <HeaderTag size={props.size} color={props.color} {...props}>
        {props.children}
      </HeaderTag>
      <Spacing height="19px" />
      {props.underline && <Underline />}
    </>
  );
};

Heading.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
  font: PropTypes.string,
  weight: PropTypes.string,
  underline: PropTypes.bool
};

export default Heading;
