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
              images={data.allGalleryYaml.edges.map(({ node }) => ({
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
