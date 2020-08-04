import React from "react";
import { graphql } from "gatsby";

import GlobalStyle from "../style/global/GlobalStyle";

import Hero from "../components/Hero";
import Layout from "../components/layout";
import Section from "../components/Section";


const Template = ({ data, pageContext }) => {
  console.log(data);
  return (
    <>
    <GlobalStyle />
    <div>
      <Layout>
        <Hero />
        <Section />
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
