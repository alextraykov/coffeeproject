import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import BlogCard from "./BlogCard";

const Container = styled.div`
  display: grid;
  width: 100%;
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
  const { large, items } = props;

  return (
    <Container large={!!large}>
      {items.map((card, index) => {
        if (large && index === 0) {
          return (
            <BlogCard
              large
              card={card.node}
              key={card.node.id + Math.floor(Math.random() * 1000)}
            />
          );
        }
        return (
          <BlogCard
            card={card.node}
            key={card.node.id + Math.floor(Math.random() * 1000)}
          />
        );
      })}
    </Container>
  );
};

CardGrid.propTypes = {
  large: PropTypes.bool,
  items: PropTypes.array.isRequired
};

export default CardGrid;
