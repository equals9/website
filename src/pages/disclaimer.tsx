import React from "react";
import { Layout, Section, Container } from "../components/common/index";
import { Box, Text, Heading, Anchor } from "grommet";
import ThemeContext from "../util/context";

const Disclaimer = () => (
  <Layout>
    <ThemeContext.Consumer>
      {theme => (
        <Box background={theme.dark ? "dark-2" : "light-1"}>
          <Section>
            <Heading>Disclaimer</Heading>
          </Section>
          <Container>
            <Text as="p">Information in accordance with Section 5 TMG</Text>

            <Heading level="2">Contact Information</Heading>
            <Text>Daniel Wirtz</Text>
            <Text>Thomashofstr. 4</Text>
            <Text>Aachen, Germany</Text>
            <br />
            <Text>
              E-Mail:{" "}
              <Anchor href="mailto:danielwirtzx@gmail.com">
                danielwirtzx@gmail.com
              </Anchor>
            </Text>
            <Text>
              Web:{" "}
              <Anchor href="https://danielwirtz.com" target="_blank">
                https://danielwirtz.com
              </Anchor>
            </Text>
            <Heading level="2">Disclaimer</Heading>
            <Heading level="4">Accountability for content </Heading>
            <Text as="p">
              The contents of our pages have been created with the utmost care.
              However, we cannot guarantee the contents' accuracy, completeness
              or topicality. According to statutory provisions, we are
              furthermore responsible for our own content on these web pages. In
              this matter, please note that we are not obliged to monitor the
              transmitted or saved information of third parties, or investigate
              circumstances pointing to illegal activity. Our obligations to
              remove or block the use of information under generally applicable
              laws remain unaffected by this as per §§ 8 to 10 of the Telemedia
              Act (TMG).
            </Text>
            <Heading level="4">Accountability for links </Heading>
            <Text as="p">
              Responsibility for the content of external links (to web pages of
              third parties) lies solely with the operators of the linked pages.
              No violations were evident to us at the time of linking. Should
              any legal infringement become known to us, we will remove the
              respective link immediately.
            </Text>
            <Heading level="4">Copyright </Heading>
            <Text as="p">
              Our web pages and their contents are subject to German copyright
              law. Unless expressly permitted by law, every form of utilizing,
              reproducing or processing works subject to copyright protection on
              our web pages requires the prior consent of the respective owner
              of the rights. Individual reproductions of a work are only allowed
              for private use. The materials from these pages are copyrighted
              and any unauthorized use may violate copyright laws.
            </Text>
          </Container>
        </Box>
      )}
    </ThemeContext.Consumer>
  </Layout>
);

export default Disclaimer;
