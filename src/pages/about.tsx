import React from "react";
import RecentMovies from "../components/recentMovies";
import { graphql } from "gatsby";
import { Layout, Section } from "../components/common";
import { Heading } from "grommet";

const About = ({ data }) => (
  <Layout>
    <Section>
      <Heading level="2">
        Vehicula suscipit turpis aliquet enim ad torquent eu est, sit placerat
        purus luctus donec tempus ante, senectus facilisis ullamcorper faucibus
        morbi ridiculus egestas.
      </Heading>
    </Section>
    <Section>
      <RecentMovies data={data.allTraktWatchedMovie.edges} />
    </Section>
    <Section>
      <RecentMovies data={data.allTraktWatchedMovie.edges} />
    </Section>
  </Layout>
);

export const query = graphql`
  query {
    allTraktWatchedMovie(
      limit: 6
      sort: { fields: last_watched_at, order: DESC }
    ) {
      edges {
        node {
          last_watched_at(fromNow: true)
          tmdb_metadata {
            poster {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default About;
