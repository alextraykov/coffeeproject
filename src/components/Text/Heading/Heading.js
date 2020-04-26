import React from "react";
import PropTypes from "prop-types";

const Heading = props => {
  const HeaderTag = `h${props.size}`;

  return <HeaderTag className={props.className}>{props.children}</HeaderTag>;
};

Heading.propTypes = {
  size: PropTypes.number.isRequired,
  className: PropTypes.string
};
