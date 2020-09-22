import React from "react";
import { graphql } from "gatsby";

import colors from "../style/colors";
import GlobalStyle from "../style/global/GlobalStyle";
import Heading from "../style/components/Text/Heading";
import Spacing from "../style/components/Spacing";
import Text from "../style/components/Text/Text";

import Button from "../components/Button";
import Hero from "../components/Hero";
import Layout from "../components/layout";
import Section from "../components/Section";
import styled from "styled-components";

const Vertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: ${props => (!!props.width ? props.width : "100%")};
  height: 100%;
`;

const Horizontal = styled.div`
  display: flex;
  flex-direction: ${props => (!!props.vertical ? "column" : "row")};
  justify-content: space-between;
  width: ${props => (!!props.width ? props.width : "100%")};
  flex-shrink: 0;
`;

const StepList = styled.ol`
  list-style: none;
  list-style-position: inside;
  font-family: Inter;
  font-size: 16px;
  font-weight: regular;
  counter-reset: list-counter;
`;

const Step = styled.li`
  counter-increment: list-counter;

  &:before {
    content: counter(list-counter);
    font-family: Playfair Display;
    color: ${colors.taupe};
    font-size: 24px;
    margin-right: 16px;
  }

  &:not(:last-child) {
    margin-bottom: 18px;
  }
`;

const GridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 118px [col-start]);
  grid-template-rows: repeat(16, auto [row-start]);
`;

const GridElement = styled.div`
  grid-column: span ${props => !!props.columns && props.columns};
  grid-row: span ${props => !!props.rows && props.rows};
`;

const Template = ({ data, pageContext }) => {
  return (
    <>
      <GlobalStyle />
      <div>
        <Layout>
          <Hero />
          <Section>
            <Horizontal>
              <Vertical width="70%">
                <Heading size="l" color="taupe">
                  Recipe overview
                </Heading>
                <Spacing height="16px" />
                <Text type="button" color="taupe" align="left">
                  "We find that extraction is higher (19-22% EXT) without over
                  extracting. Like most Aeropress cups, this is full bodied. We
                  do not dilute. We have been able to create incredibly complex
                  and vibrant cups with most coffees we have brewed using this
                  method.”
                </Text>
              </Vertical>
              <Vertical width="30%">
                <Spacing height="69px" />
                <Horizontal>
                  <Heading size="s" color="taupe">
                    Creator
                  </Heading>
                  <Text type="body" color="taupe">
                    Chucky's Sofia
                  </Text>
                </Horizontal>
                <Spacing height="24px" />
                <Horizontal>
                  <Heading size="s" color="taupe">
                    Brew type
                  </Heading>
                  <Text type="body" color="taupe">
                    Chemex
                  </Text>
                </Horizontal>
              </Vertical>
            </Horizontal>
          </Section>
        </Layout>
      </div>
    </>
  );
};

export const postQuery = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      rawMarkdownBody
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        path
        tags
        excerpt
      }
    }
    imageSharp {
      original {
        src
      }
    }
  }
`;

export default Template;
