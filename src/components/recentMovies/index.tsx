import React from "react";
import { Box, Heading } from "grommet";
import PosterCard from "./poster-card";
import Intro from "./intro";

const RecentMovies = ({ data }) => (
  <Box>
    <Intro />
    <Box direction="row-responsive" gap="small" justify="evenly">
      {data.map(el => (
        <PosterCard
          image={el.node.tmdb_metadata.poster.localFile.childImageSharp.fluid}
          last_watched_at={el.node.last_watched_at}
        />
      ))}
    </Box>
  </Box>
);

export default RecentMovies;
