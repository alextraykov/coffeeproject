import React from "react";
import { graphql } from "gatsby";

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
  width: 100%;
  height: 100%;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: ${props => !!props.vertical ? "column" : "row"};
  justify-content: space-between;
  width: ${props => !!props.width ? props.width : "100%"};
  flex-shrink: 0;
`;

const StepList = styled.ol`
  list-style-position: inside;
  font-family: Inter;
  font-size: 16px;
  font-weight: regular;
`;

const Step = styled.li``;

const Template = ({ data, pageContext }) => {
  return (
    <>
    <GlobalStyle />
    <div>
      <Layout>
        <Hero />
        <Section>
          <Vertical>
            <Heading size="l" color="taupe">
              Recipe overview
            </Heading>
            <Spacing height="16px" />
            <Inner>
              <Inner vertical width="66%">
                <Text type="body" color="taupe" align="left">
                  "We find that extraction is higher (19-22% EXT) without over extracting. Like most Aeropress cups, this is full bodied. We do not dilute. We have been able to create incredibly complex and vibrant cups with most coffees we have brewed using this method.”
                </Text>
              </Inner>
              <Spacing width="16px" />
              <Vertical>
                <Inner width="100%">
                    <Heading size="s" color="taupe">Creator</Heading>
                    <Text type="body" color="taupe">Chucky's Sofia</Text>
                </Inner>
                <Spacing height="24px" />
                <Inner width="100%">
                    <Heading size="s" color="taupe">Brew type</Heading>
                    <Text type="body" color="taupe">Chucky's Sofia</Text>
                </Inner>
              </Vertical>
            </Inner>
            <Spacing height="53px" />
            <Inner>
              <Vertical>
                <Heading size="l" color="taupe">Method</Heading>
                <Spacing height="24px" />
                <StepList>
                  <Step>Make sure you completely soak the paper filter with hot water. Use a lot of water ;)</Step>
                </StepList>
              </Vertical>
            </Inner>
          </Vertical>
        </Section>
        <Section small>
          <Heading size="l" color="taupe">
           Support us with a cup of coffee
          </Heading>
          <Spacing height="17px" />
          <Text type="button" color="taupe" align="center">
           We would appreciate your humble support in order to keep this website up and running for longer. On top of that we believe that a good cup of coffee is always welcome, right?
          </Text>
          <Spacing height="32px" />
          <Button path="/">Support us</Button>
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
