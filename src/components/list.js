import styled from "styled-components";
import colors from "../style/colors";

export const StepList = styled.ol`
  list-style: none;
  list-style-position: inside;
  font-family: Inter;
  font-size: 16px;
  font-weight: regular;
  counter-reset: list-counter;
`;

export const Step = styled.div`
  color: ${colors.taupe};
  font-size: 16px;
  line-height: 24px;
  position: relative;
  margin-left: 24px;
  max-width: 600px;

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const StepNumber = styled.div`
  position: absolute;
  top: 0;
  left: -24px;
  font-size: 24px;
  line-height: 24px;
  font-family: Playfair Display;
`;
