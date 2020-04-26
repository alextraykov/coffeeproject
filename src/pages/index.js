import React from "react";
import { graphql } from "gatsby";

import GlobalStyle from "../style/global/GlobalStyle";

import Layout from "../components/layout";
import BlogCard from "../components/BlogCard/BlogCard";

const IndexPage = ({ data }) => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        {data.allFile.edges.map((post, index) => {
          return (
            <BlogCard
              featuredImage={
                post.node.childMarkdownRemark.frontmatter.featuredImage
                  .childImageSharp.original.src
              }
              large
            />
          );
        })}
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
