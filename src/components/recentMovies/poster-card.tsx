import React from "react";
import { Box, Text } from "grommet";
import Image from "gatsby-image";
import styled from "styled-components";

const PosterCard = ({ image, last_watched_at }) => (
  <Box>
    <Box
      animation="fadeIn"
      elevation="xsmall"
      round="xsmall"
      overflow="hidden"
      height="full"
      width="large"
    >
      <StyledImage fluid={image} />
    </Box>
    <Text color="light-5" size="small">
      {last_watched_at}
    </Text>
  </Box>
);

const StyledImage = styled(Image)`
  object-fit: contain;
`;

export default PosterCard;
