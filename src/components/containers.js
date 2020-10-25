import styled from "styled-components";

export const Vertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: ${props => (!!props.width ? props.width : "100%")};
  height: 100%;
`;

export const Horizontal = styled.div`
  display: flex;
  flex-direction: ${props => (!!props.vertical ? "column" : "row")};
  justify-content: space-between;
  width: ${props => (!!props.width ? props.width : "100%")};
  flex-shrink: 0;
`;
