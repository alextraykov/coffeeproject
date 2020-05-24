import React, { useState } from "react";
import styled from "styled-components";
import FooterData from "../../config/footer.json";
import Heading from "../style/components/Text/Heading";
import Text from "../style/components/Text/Text";
import colors from "../style/colors";

const Canvas = styled.div`
  height: 253px;
  width: 100%;
  background: #473e34;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InnerContainer = styled.footer`
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
  justify-content: ${props => (props.between ? `space-between` : `flex-start`)};
  align-items: flex-start;
`;

const HorizontalLine = styled.hr`
  height: 2px;
  width: 100%;
  margin: 16px 0;
  background: ${colors.darkSand};
  border: none;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 48px;

  &:nth-child(3) {
    margin-right: auto;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const Item = styled.a`
  text-decoration: none;
  padding-top: 12px;
`;

const InputConatiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  margin-top: 12px;
`;

const EmailInput = styled.input`
  width: 264px;
  height: 40px;
  background: ${colors.darkSand};
  border: none;
  font-family: Inter;
  padding: 12px 17px;
  margin-right: 16px;
  color: ${colors.white};

  &:focus {
    outline-width: 0;
  }
`;

const Button = styled.button`
  width: 140px;
  height: 40px;
  background: ${colors.white};
  border: none;
`;

const Footer = props => {
  const [inputValue, onChangeInputValue] = useState("");

  const onChangeHandler = input => {
    onChangeInputValue(input);
  };
  return (
    <Canvas>
      <InnerContainer>
        <Compartment>
          {renderSocialMediaColumn()}
          {renderFooterColumns()}
          {renderEmailInputColumn(inputValue, onChangeHandler)}
        </Compartment>
        <HorizontalLine />
        <Compartment between={true}>
          <Text type="micro">2020 - Present</Text>
          <Text type="micro">A witty quote about coffee and the creators</Text>
          <Text type="micro">Donate</Text>
        </Compartment>
      </InnerContainer>
    </Canvas>
  );
};

const renderSocialMediaColumn = () => {
  return (
    <Column>
      <Heading size="s">CAFFETARIUM</Heading>
      <Item href="https://instagram.com">
        <Text type="body">Instagram</Text>
      </Item>
      <Item href="https://twitter.com">
        <Text type="body">Twitter</Text>
      </Item>
    </Column>
  );
};

const renderFooterColumns = () => {
  return FooterData.columns.map(column => {
    return (
      <Column key={column.name}>
        <Text type="button">{column.name}</Text>
        {renderColumnButtons(column.buttons)}
      </Column>
    );
  });
};

const renderEmailInputColumn = (value, onChangeHandler) => {
  return (
    <Column>
      <Text type="button">New recipes, once a month - no spam</Text>
      <InputConatiner>
        <EmailInput
          type="email"
          value={value}
          onChange={e => onChangeHandler(e.target.value)}
          placeholder="Enter your email to sign up"
        />
        <Button type="submit">
          <Text type="button" color="taupe">
            Submit
          </Text>
        </Button>
      </InputConatiner>
    </Column>
  );
};

const renderColumnButtons = buttons => {
  return buttons.map(button => {
    return (
      <Item href={button.path} key={button.title}>
        <Text type="body">{button.title}</Text>
      </Item>
    );
  });
};

export default Footer;
