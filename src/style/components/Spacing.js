import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SpacingTag = styled.div`
  ${props => {
    return `
        width: ${!!props.width ? props.width : "100%"};
        height: ${!!props.height ? props.height : "100%"};
        margin: 0;
        padding: 0;
        background: transparent;
        display: inline-block;
      `;
  }}
`;

const Spacing = props => {
  return (
    <SpacingTag
      width={props.width}
      height={props.height}
      className={props.className}
    />
  );
};

Spacing.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string
};

export default Spacing;
