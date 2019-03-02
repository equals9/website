import Gallery from "../components/gallery";
import React from "react";
import { graphql } from "gatsby";
import { Layout, Section } from "../components/common";

const Photography = ({ data }) => (
  <Layout>
    <Section>
      <Gallery
        images={data.allGalleryYaml.edges.map(({ node }) => ({
          ...node.image.childImageSharp.fluid,
          caption: `${node.title} – ${node.author}`
        }))}
        itemsPerRow={[2, 3]}
      />
    </Section>
  </Layout>
);

export const query = graphql`
  query {
    allGalleryYaml {
      edges {
        node {
          title
          author
          image {
            childImageSharp {
              fluid {
                aspectRatio

                # Use gatsby-image later for better user experience
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default Photography;
