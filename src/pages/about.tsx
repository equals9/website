import React from "react";
import RecentMovies from "../components/recentMovies";
import { graphql } from "gatsby";
import { Layout, Section } from "../components/common";
import { Heading } from "grommet";
import ThemeContext from "../util/context";

const About = ({ data }) => (
  <Layout>
    <ThemeContext.Consumer>
      {theme => (
        <>
          <Section background={theme.dark ? "dark-1" : "light-1"}>
            <Heading level="2">
              If you want to get to know me, this is the perfect site for you.
              I'm gathring data from various sources and displaying them here.
            </Heading>
          </Section>
          <Section background={theme.dark ? "dark-1" : "light-1"}>
            <RecentMovies data={data.allTraktWatchedMovie.edges} />
          </Section>
          <Section background={theme.dark ? "dark-1" : "light-1"}>
            <RecentMovies data={data.allTraktWatchedMovie.edges} />
          </Section>
        </>
      )}
    </ThemeContext.Consumer>
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
