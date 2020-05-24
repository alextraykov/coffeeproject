import React from "react";
import { graphql } from "gatsby";

import GlobalStyle from "../style/global/GlobalStyle";

import Layout from "../components/layout";
import Section from "../components/Section";
import Heading from "../style/components/Text/Heading";
import Text from "../style/components/Text/Text";
import Spacing from "../style/components/Spacing";
import CardGrid from "../components/CardGrid/CardGrid";

const IndexPage = ({ data }) => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Section>
          <Heading size="l" color="taupe">
            Brewing Recipes
          </Heading>
          <Spacing height="17px" />
          <Text type="button" color="taupe">
            From the traditional stove-top to vacuum and drip pots recipes - all
            listed for you to enjoy
          </Text>
          <Spacing height="48px" />
        </Section>
        <CardGrid large />
      </Layout>
    </>
  );
};

export const query = graphql`
  query IndexPageQuery {
    allFile(filter: { relativePath: { regex: "/^posts//" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              date
              excerpt
              path
              tags
              title
              featuredImage {
                childImageSharp {
                  original {
                    src
                  }
                }
              }
            }
          }
          relativePath
        }
      }
    }
  }
`;
export default IndexPage;
