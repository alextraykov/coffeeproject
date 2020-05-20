import React from "react";
import { graphql } from "gatsby";

import GlobalStyle from "../style/global/GlobalStyle";

import Layout from "../components/layout";
import Heading from "../components/Text/Heading/Heading";

const IndexPage = ({ data }) => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Heading size={2}>Test</Heading>
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
