import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../colors";

const TextElement = styled.p`
  ${props => {
    return `
    font-size: ${`${props.fs}px`};
    line-height: ${`${props.lh}px`};
    font-family: ${props.ff ? props.ff : "Inter"};
    font-weight: ${props.weight ? props.weight : "normal"};
    color: ${props.color !== undefined ? colors[props.color] : colors.white};
    text-align: ${props.align};
  `;
  }}
`;

const Text = props => {
  return (
    <TextElement type={props.type} color={props.color} {...props}>
      {props.children}
    </TextElement>
  );
};

Text.propTypes = {
  fs: PropTypes.number,
  lh: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string
};

export default Text;
