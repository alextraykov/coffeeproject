import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const LinkTag = styled(Link)`
  text-decoration: none;
`;

const StyledLink = props => {
  return <LinkTag {...props}>{props.children}</LinkTag>;
};

export default StyledLink;
