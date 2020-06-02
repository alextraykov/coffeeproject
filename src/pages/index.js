import React from "react";

import GlobalStyle from "../style/global/GlobalStyle";

import Layout from "../components/layout";
import Section from "../components/Section";
import Heading from "../style/components/Text/Heading";
import Text from "../style/components/Text/Text";
import Spacing from "../style/components/Spacing";
import CardGrid from "../components/CardGrid";
import Button from "../components/Button";

const IndexPage = props => {
  const { articleCards } = props.data;
  let testArr = []
    .concat(articleCards.edges)
    .concat(articleCards.edges)
    .concat(articleCards.edges);
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
          <CardGrid large items={testArr} />
        </Section>
        <Section small>
          <Heading size="l" color="taupe">
            Support us with a cup of coffee
          </Heading>
          <Spacing height="17px" />
          <Text type="button" color="taupe" align="center">
            We would appreciate your humble support in order to keep this
            website up and running for longer. On top of that we believe that a
            good cup of coffee is always welcome, right?
          </Text>
          <Spacing height="32px" />
          <Button>Support us</Button>
        </Section>
        <Section>
          <Heading size="l" color="taupe">
            Places worth visiting
          </Heading>
          <Spacing height="17px" />
          <Text type="button" color="taupe">
            The world is big and amazing coffee places lurk around the corner
          </Text>
          <Spacing height="48px" />
          <CardGrid items={testArr} />
        </Section>
        <Section small>
          <Heading size="l" color="taupe">
            So you’ve almost reached the end
          </Heading>
          <Spacing height="17px" />
          <Text type="button" color="taupe" align="center">
            Your support is of great value. If you have any feedback,
            suggestions or just want to say hi - please don’t hesitate to
            contact us.
          </Text>
          <Spacing height="32px" />
          <Button>Contact us</Button>
        </Section>
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
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

export default IndexPage;
