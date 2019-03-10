import Intro from "./intro";
import PosterCard from "./poster-card";
import React from "react";
import { Box } from "grommet";
import { graphql, useStaticQuery } from "gatsby";

interface RecentMoviesProps {
  limit?: number;
}

export const RecentMovies: React.FC<RecentMoviesProps> = ({ limit }) => {
  const movies = useStaticQuery(graphql`
    query {
      allTraktWatchedMovie(
        limit: 6
        sort: { fields: last_watched_at, order: DESC }
      ) {
        edges {
          node {
            last_watched_at(fromNow: true)
            movie {
              ids {
                slug
              }
            }
            tmdb_metadata {
              title
              poster {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 300, quality: 90) {
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
  `);

  return (
    <Box>
      <Intro />
      <Box direction="row-responsive" gap="small" justify="evenly">
        {movies.allTraktWatchedMovie.edges.slice(0, limit || 6).map(el => (
          <PosterCard
            image={el.node.tmdb_metadata.poster.localFile.childImageSharp.fluid}
            last_watched_at={el.node.last_watched_at}
          />
        ))}
      </Box>
    </Box>
  );
};

export default RecentMovies;
