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
  console.log(data);
  return (
    <Layout>
      <CardContainer>
        <BlogCard imgData={data.imageSharp} />
        <BlogCard imgData={data.imageSharp} />
        <BlogCard imgData={data.imageSharp} />
        <BlogCard imgData={data.imageSharp} />
      </CardContainer>
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery {
    imageSharp {
      original {
        src
      }
    }
  }
`;

export default IndexPage;
