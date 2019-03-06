import Gallery from "../components/gallery";
import React from "react";
import { graphql } from "gatsby";
import { Layout, Section } from "../components/common";

const Photography = ({ data }) => (
  <Layout>
    <Section>
      <Gallery
        images={data.googlePhotos.edges.map(({ node }) => ({
          ...node.baseUrl
        }))}
        itemsPerRow={[3, 4]}
      />
    </Section>
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
        }
      }
    }
  }
`;

export default Photography;
