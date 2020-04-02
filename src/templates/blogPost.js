import React from "react";
import { graphql, Link } from "gatsby";
import ReactMarkdown from "react-markdown";
import Heading from "../components/heading";

const Template = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const title = data.markdownRemark.frontmatter.title;
  const date = data.markdownRemark.frontmatter.date;
  const markdownBody = data.markdownRemark.rawMarkdownBody;

  return (
    <div>
      <h1>{title}</h1>
      <div>
        <em>{date}</em>
      </div>
      <br />
      <div className="blogPost">
        <ReactMarkdown
          source={markdownBody}
          renderers={{ paragraph: Heading }}
        />
      </div>
      <p>
        {prev && (
          <Link to={prev.frontmatter.path}>
            {prev.frontmatter.title}{" "}
            <span role="img" aria-label="point-left">
              👈{" "}
            </span>
            Previous
          </Link>
        )}
      </p>
      <p>
        {next && (
          <Link to={next.frontmatter.path}>
            Next{" "}
            <span role="img" aria-label="point-right">
              👉
            </span>
            {next.frontmatter.title}
          </Link>
        )}
      </p>
    </div>
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
  }
`;

export default Template;
