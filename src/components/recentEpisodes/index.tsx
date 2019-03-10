import Intro from "./intro";
import leftPad from "left-pad";
import PosterCard from "./poster-card";
import React from "react";
import { Box } from "grommet";
import { graphql, useStaticQuery } from "gatsby";

const generateLink = (slug: string, seasons: any[]) => {
  const { season, episode } = getLatestEpisode(seasons);
  return `https://trakt.tv/shows/${slug}/seasons/${season}/episodes/${episode}`;
};

const getLatestEpisode = (seasons: any[]) => {
  const latest = seasons.reduce((acc, cur) => {
    const latestEpisode = [...(cur.episodes as any[])]
      .sort(
        (a, b) =>
          new Date(b.last_watched_at).getTime() -
          new Date(a.last_watched_at).getTime()
      )
      .shift();

    if (
      !acc ||
      (latestEpisode &&
        new Date(latestEpisode.last_watched_at).getTime() >
          new Date(acc.last_watched_at).getTime())
    ) {
      return {
        ...latestEpisode,
        season: cur.number
      };
    }

    return acc;
  }, null);

  return {
    string: `S${leftPad(latest.season, 2, "0")}E${leftPad(
      latest.number,
      2,
      "0"
    )}`,
    season: latest.season,
    episode: latest.number
  };
};

interface RecentEpisodesProps {
  limit?: number;
}

export const recentEpisodes: React.FC<RecentEpisodesProps> = ({ limit }) => {
  const movies = useStaticQuery(graphql`
    query {
      allTraktWatchedShow(
        limit: 6
        sort: { fields: last_watched_at, order: DESC }
      ) {
        edges {
          node {
            last_watched_at(fromNow: true)
            show {
              ids {
                slug
              }
            }
            seasons {
              number
              episodes {
                number
                last_watched_at
              }
            }
            tmdb_metadata {
              name
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
        {movies.allTraktWatchedShow.edges.slice(0, limit || 6).map(el => (
          <PosterCard
            image={el.node.tmdb_metadata.poster.localFile.childImageSharp.fluid}
            last_watched_at={el.node.last_watched_at}
          />
        ))}
      </Box>
    </Box>
  );
};

export default recentEpisodes;
