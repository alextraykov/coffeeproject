import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../colors";

const HeaderElement = styled.h1`
  ${props => {
    return `
    font-size: ${`${props.fs}px`};
    line-height: ${`${props.lh}px`};
    font-family: ${!!props.font ? `${props.font}` : "Playfair Display"};
    font-weight: ${!!props.weight ? `${props.weight}` : "bold"};
    color:  ${!!props.color ? colors[props.color] : colors.white};
  `;
  }}
`;

const Heading = props => {
  return (
    <>
      <HeaderElement size={props.size} color={props.color} {...props}>
        {props.children}
      </HeaderElement>
    </>
  );
};

Heading.propTypes = {
  fs: PropTypes.number,
  lh: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
  font: PropTypes.string,
  weight: PropTypes.string
};

export default Heading;
