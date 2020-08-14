import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";
import colors from "../style/colors";

const StyledButton = styled(Link)`
  height: 40px;
  font-size: 16px;
  text-decoration: none;
  color: ${colors.taupe};
  border: 1px solid ${colors.taupe};
  padding: 6px 32px;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    color: red;
    border-color: red;
    transition: all 450ms;
  }
`;

const Button = props => {
  return (
    <StyledButton to={props.path} {...props}>
      {props.children}
    </StyledButton>
  );
};

Button.propTypes = {
  path: PropTypes.string.isRequired
};

export default Button;
