import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../colors";

const TextTag = styled.p`
  ${props => {
    let settings = `
    font-family: Inter;
    font-weight: normal;
    color: ${props.color !== undefined ? colors[props.color] : colors.white};
    text-align: ${props.align};
    line-height: 150%;
  `;
    switch (props.type) {
      case "micro":
        return settings.concat(`font-size: 12px;`);
      case "body":
        return settings.concat(`font-size: 14px;`);
      case "button":
        return settings.concat(`font-size: 16px;`);
      default:
        console.warn("Forgot to specify the size of the Paragraph");
        return settings.concat(`color: #FF0000;`);
    }
  }}
`;

const Text = props => {
  return (
    <TextTag type={props.type} color={props.color} {...props}>
      {props.children}
    </TextTag>
  );
};

Text.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string,
  className: PropTypes.string
};

export default Text;
