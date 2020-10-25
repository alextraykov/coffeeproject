import React from "react";

import GlobalStyle from "../style/global/GlobalStyle";
import Heading from "../style/components/Text/Heading";
import Spacing from "../style/components/Spacing";
import Text from "../style/components/Text/Text";

import { Horizontal, Vertical } from "../components/containers";
import Button from "../components/Button";
import Layout from "../components/layout";
import Hero from "../components/Hero";

import AboutImage from "../images/about-image.png";
import Section from "../components/Section";

const AboutPage = props => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Hero
          heading="About our coffee initiative"
          subHeading="Chemex brew specifically made for lighter roasts"
          image={AboutImage}
        />
        <Section>
          <Horizontal>
            <Vertical width="70%">
              <Heading fs={32} lh={42} color="taupe">
                About the project
              </Heading>
              <Spacing height="16px" />
              <Text fs={16} lh={24} color="taupe" align="left">
                "We find that extraction is higher (19-22% EXT) without over
                extracting. Like most Aeropress cups, this is full bodied. We do
                not dilute. We have been able to create incredibly complex and
                vibrant cups with most coffees we have brewed using this
                method.”
              </Text>
            </Vertical>
            <Vertical width="30%">
              <Spacing height="58px" />
              <Horizontal>
                <Heading size="s" color="taupe">
                  Creator
                </Heading>
                <Text type="body" color="taupe">
                  Chucky's Sofia
                </Text>
              </Horizontal>
              <Spacing height="24px" />
              <Horizontal>
                <Heading size="s" color="taupe">
                  Brew type
                </Heading>
                <Text type="body" color="taupe">
                  Chemex
                </Text>
              </Horizontal>
            </Vertical>
          </Horizontal>
          <Spacing height="53px" />
          <Horizontal>
            <Vertical width="70%">
              <Heading fs={32} lh={42} color="taupe">
                About the project
              </Heading>
              <Spacing height="16px" />
              <Text fs={16} lh={24} color="taupe" align="left">
                "We find that extraction is higher (19-22% EXT) without over
                extracting. Like most Aeropress cups, this is full bodied. We do
                not dilute. We have been able to create incredibly complex and
                vibrant cups with most coffees we have brewed using this
                method.”
              </Text>
            </Vertical>
            <Vertical width="30%">
              <Spacing height="58px" />
              <Horizontal>
                <Heading size="s" color="taupe">
                  Designed by
                </Heading>
                <Text type="body" color="taupe">
                  Alexander Traykov
                </Text>
              </Horizontal>
              <Spacing height="24px" />
              <Horizontal>
                <Heading size="s" color="taupe">
                  Developed by
                </Heading>
                <Text type="body" color="taupe">
                  Petar Dyakov
                </Text>
              </Horizontal>
              <Spacing height="24px" />
              <Horizontal>
                <Heading size="s" color="taupe">
                  Loved by
                </Heading>
                <Text type="body" color="taupe">
                  Both
                </Text>
              </Horizontal>
            </Vertical>
          </Horizontal>
        </Section>
        <Section small>
          <Heading fs={32} lh={46} color="taupe">
            Support us with a cup of coffee
          </Heading>
          <Spacing height="16px" />
          <Text fs={14} lh={21} color="taupe" align="center">
            We would appreciate your humble support in order to keep this
            website up and running for longer. On top of that we believe that a
            good cup of coffee is always welcome, right?
          </Text>
          <Spacing height="32px" />
          <Button path="/">Support us</Button>
        </Section>
      </Layout>
    </>
  );
};

export default AboutPage;
