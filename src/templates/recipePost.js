import React from "react";
import { graphql } from "gatsby";

import colors from "../style/colors";
import GlobalStyle from "../style/global/GlobalStyle";
import Heading from "../style/components/Text/Heading";
import Spacing from "../style/components/Spacing";
import Text from "../style/components/Text/Text";

import Button from "../components/Button";
import CardGrid from "../components/CardGrid";
import Hero from "../components/Hero";
import Layout from "../components/layout";
import Section from "../components/Section";
import styled from "styled-components";

// TO BE REMOVED
let text =
  "Make sure you completely soak the paper filter with hot water. Use a lot of water ;)";

function renderSteps() {
  let items = [];
  for (let i = 0; i < 5; i++) {
    items.push(
      <Step key={i}>
        <StepNumber>{i + 1}</StepNumber>
        {text}
      </Step>
    );
  }
  return items;
}

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

const Step = styled.div`
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

const StepNumber = styled.div`
  position: absolute;
  top: 0;
  left: -24px;
  font-size: 24px;
  line-height: 24px;
  font-family: Playfair Display;
`;

const Template = props => {
  // TO BE REMOVED
  const { articleCards } = props.data;
  let testArr = [].concat(articleCards.edges).concat(articleCards.edges.pop());
  console.log(props);
  return (
    <>
      <GlobalStyle />
      <div>
        <Layout>
          <Hero />
          <Section>
            <Horizontal>
              <Vertical width="70%">
                <Heading fs={32} lh={42} color="taupe">
                  Recipe overview
                </Heading>
                <Spacing height="16px" />
                <Text fs={16} lh={24} color="taupe" align="left">
                  "We find that extraction is higher (19-22% EXT) without over
                  extracting. Like most Aeropress cups, this is full bodied. We
                  do not dilute. We have been able to create incredibly complex
                  and vibrant cups with most coffees we have brewed using this
                  method.”
                </Text>
              </Vertical>
              <Vertical width="30%">
                <Spacing height="58px" />
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
            <Spacing height="53px" />
            <Horizontal>
              <Vertical width="70%">
                <Heading fs={32} lh={42} color="taupe">
                  Method
                </Heading>
                <Spacing height="24px" />
                <StepList>{renderSteps()}</StepList>
              </Vertical>
              <Vertical width="30%">
                <Heading fs={32} lh={42} color="taupe">
                  Recipe
                </Heading>
                <Spacing height="28px" />
                <Horizontal>
                  <Text
                    fs={16}
                    lh={16}
                    ff="Playfair Display"
                    color="taupe"
                    bold
                  >
                    Coffee
                  </Text>
                  <Text fs={16} lh={16} color="taupe">
                    22g
                  </Text>
                </Horizontal>
                <Spacing height="24px" />
                <Horizontal>
                  <Text
                    fs={16}
                    lh={16}
                    ff="Playfair Display"
                    color="taupe"
                    bold
                  >
                    Coffee
                  </Text>
                  <Text fs={16} lh={16} color="taupe">
                    22g
                  </Text>
                </Horizontal>
                <Spacing height="24px" />
                <Horizontal>
                  <Text
                    fs={16}
                    lh={16}
                    ff="Playfair Display"
                    color="taupe"
                    bold
                  >
                    Coffee
                  </Text>
                  <Text fs={16} lh={16} color="taupe">
                    22g
                  </Text>
                </Horizontal>
                <Spacing height="24px" />
                <Horizontal>
                  <Text
                    fs={16}
                    lh={16}
                    ff="Playfair Display"
                    color="taupe"
                    bold
                  >
                    Coffee
                  </Text>
                  <Text fs={16} lh={16} color="taupe">
                    22g
                  </Text>
                </Horizontal>
                <Spacing height="24px" />
                <Horizontal>
                  <Text
                    fs={16}
                    lh={16}
                    ff="Playfair Display"
                    color="taupe"
                    bold
                  >
                    Coffee
                  </Text>
                  <Text fs={16} lh={16} color="taupe">
                    22g
                  </Text>
                </Horizontal>
                <Spacing height="24px" />
              </Vertical>
            </Horizontal>
          </Section>
          <Section small>
            <Heading fs={32} lh={46} color="taupe">
              Support us with a cup of coffee
            </Heading>
            <Spacing height="16px" />
            <Text fs={14} lh={21} color="taupe" align="center">
              We would appreciate your humble support in order to keep this
              website up and running for longer. On top of that we believe that
              a good cup of coffee is always welcome, right?
            </Text>
            <Spacing height="32px" />
            <Button path="/">Support us</Button>
          </Section>
          <Section>
            <Heading fs={40} lh={54} color="taupe">
              Recipe suggestions
            </Heading>
            <Spacing height="17px" />
            <Text fs={16} lh={16} color="taupe" align="left">
              If you enjoyed making the one listed above, here are some others
              that you’ll approve
            </Text>
            <Spacing height="32px" />
            <CardGrid items={testArr} />
            <Spacing height="64px" />
            <Heading fs={40} lh={54} color="taupe">
              Featured Coffee places
            </Heading>
            <Spacing height="17px" />
            <Text fs={16} lh={16} color="taupe" align="left">
              A selection of brewing techniques for coffee enthusiast to enjoy.
            </Text>
            <Spacing height="32px" />
            <CardGrid items={testArr} />
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
    articleCards: allFile(filter: { relativePath: { regex: "/^posts//" } }) {
      edges {
        node {
          relativePath
          childMarkdownRemark {
            frontmatter {
              date
              excerpt
              path
              tags
              title
              featuredImage {
                id
                childImageSharp {
                  original {
                    src
                  }
                }
              }
              icon {
                childImageSharp {
                  original {
                    src
                  }
                }
              }
            }
          }
          id
        }
      }
    }
  }
`;

export default Template;
