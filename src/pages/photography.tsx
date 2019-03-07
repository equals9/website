import Gallery from "../components/gallery";
import React from "react";
import { graphql } from "gatsby";
import { Layout, Section } from "../components/common";
import ThemeContext from "../util/context";

const Photography = ({ data }) => (
  <Layout>
    <ThemeContext.Consumer>
      {dark => (
        <Section background={dark ? "dark-1" : "light-1"}>
          <Gallery
            images={data.googlePhotos.edges.map(({ node }) => ({
              ...node
            }))}
            itemsPerRow={[2, 3]}
          />
        </Section>
      )}
    </ThemeContext.Consumer>
  </Layout>
);

export const query = graphql`
  query photoQuery {
    googlePhotos: allGooglePhoto {
      edges {
        node {
          id
          albumTitle
          baseUrl
          filename
          mediaMetadata {
            width
            height
          }
        }
      }
    }
  }
`;

export default Photography;
