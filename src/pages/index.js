import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import BlogCard from "../components/BlogCard/BlogCard";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-column-gap: 16px;
  grid-row-gap: 15px;
  margin: auto auto;
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      {/* <BlogCard featuredImage="asd" large /> */}
      {/* <CardContainer> */}
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
      {/* </CardContainer> */}
    </Layout>
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
