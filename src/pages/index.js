import React from "react";
import { graphql } from "gatsby";

import GlobalStyle from "../style/global/GlobalStyle";

import Layout from "../components/layout";
import Heading from "../style/components/Text/Heading";
import Text from "../style/components/Text/Text";
import Spacing from "../style/components/Spacing";

const IndexPage = ({ data }) => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Heading size="s" color="taupe">
          Heading 4
        </Heading>
        <Heading size="m" color="taupe">
          Heading 3
        </Heading>
        <Heading size="l" color="taupe">
          Heading 2
        </Heading>
        <Heading size="xl" color="taupe">
          Heading 1
        </Heading>
        <Text type="micro" color="taupe">
          Microcopy
        </Text>
        <Text type="body" color="taupe">
          Body copy
        </Text>
        <Spacing width="100px" height="20px" />
        <Text type="button" color="taupe">
          Button copy
        </Text>
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
