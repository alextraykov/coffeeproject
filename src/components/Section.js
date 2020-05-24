import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../style/colors";

const Canvas = styled.div`
  width: 100%;
  background: ${props => (props.small ? colors.white : colors.sand)};
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: ${props => (props.small ? `center` : `flex-start`)};
  padding: 64px 0;
  max-width: 945px;
  margin: 0 auto;
`;

const Section = props => {
  return (
    <Canvas small={!!props.small}>
      <Inner small={!!props.small}>{props.children}</Inner>
    </Canvas>
  );
};

Section.propTypes = {
  small: PropTypes.bool
};

export default Section;
