import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import BlogCard from "../components/BlogCard/BlogCard";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div>
        <BlogCard imgData={data.imageSharp} />
      </div>
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
