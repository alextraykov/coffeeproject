import React from "react";
import styled from "styled-components";

import BlogCard from "../BlogCard/BlogCard";

const Container = styled.div`
  display: grid;
  max-width: 954px;
  margin: 0 auto;
  grid-template-columns: repeat(3, auto [col-start]);
  grid-gap: 16px 16px;

  ${props =>
    props.large
      ? `& > div:first-child {
        grid-column: 1 / -1;
    }`
      : ``}
`;

const CardGrid = props => {
  return (
    <Container large={!!props.large}>
      <BlogCard large={true} />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </Container>
  );
};

export default CardGrid;
