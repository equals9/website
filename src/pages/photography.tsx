import Gallery from "../components/gallery";
import React from "react";
import { graphql } from "gatsby";
import { Layout, Section } from "../components/common";
import ThemeContext from "../util/context";
import { Heading } from "grommet";

const Photography = ({ data }) => (
  <Layout>
    <ThemeContext.Consumer>
      {theme => (
        <>
          <Section background={theme.dark ? "dark-2" : "light-2"}>
            <Heading>
              A wall of pictures of my favorite people, things and moments.
            </Heading>
          </Section>
          <Section background={theme.dark ? "dark-1" : "light-1"}>
            <Gallery
              images={data.googlePhotos.edges.map(({ node }) => ({
                ...node
              }))}
              itemsPerRow={[2, 3]}
            />
          </Section>
        </>
      )}
    </ThemeContext.Consumer>
  </Layout>
);

export const query = graphql`
  query photoQuery {
    googlePhotos: allGooglePhoto(
      sort: { fields: [mediaMetadata___creationTime], order: DESC }
    ) {
      edges {
        node {
          baseUrl
          mediaMetadata {
            creationTime(formatString: "MMMM DD, YYYY")
            width
            height
          }
        }
      }
    }
  }
`;

export default Photography;
