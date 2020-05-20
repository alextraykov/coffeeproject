import React from "react";
import styled from "styled-components";
import FooterData from "../../config/footer.json";

const Canvas = styled.div`
  height: 253px;
  background: #473e34;
`;

const InnerContainer = styled.footer`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 944px;
  margin: 0 auto;
`;

const Compartment = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  & > * {
    color: #fff;
    font-family: Inter;
  }
`;

const HorizontalLine = styled.hr`
  height: 2px;
  width: 100%;
  margin: 16px 0;
  background: #332d25;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 30%;
`;

const ColumnHeader = styled.h4`
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
`;

const Item = styled.a`
  font-size: 14px;
  line-height: 17px;
  text-decoration: none;
  color: #fff;
`;

const Footer = props => {
  return (
    <Canvas>
      <InnerContainer>
        <Compartment>{renderFooterColumns()}</Compartment>
        <HorizontalLine />
        <Compartment>
          <div>2020 - Present</div>
          <div>A witty quote about coffee and the creators</div>
          <div>Donate</div>
        </Compartment>
      </InnerContainer>
    </Canvas>
  );
};

const renderFooterColumns = () => {
  return FooterData.columns.map(column => {
    return (
      <Column key={column.name}>
        <ColumnHeader>{column.name}</ColumnHeader>
        {renderColumnButtons(column.buttons)}
      </Column>
    );
  });
};

const renderColumnButtons = buttons => {
  return buttons.map(button => {
    return (
      <Item href={button.path} key={button.title}>
        {button.title}
      </Item>
    );
  });
};

export default Footer;
