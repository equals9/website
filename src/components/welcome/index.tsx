import React from "react";
import SocialLinks from "./social-links";
import styled from "styled-components";
import { Anchor, Box, Heading } from "grommet";

const Welcome = () => (
  <Box gap="large">
    <Box gap="xsmall">
      <StyledHeading color="brand" size="small" margin="none">
        Hey, I'm Daniel. Nice to meet you.
      </StyledHeading>
      <Heading margin="none">
        I'm a Designer, Developer and Co-Founder at{" "}
        <StyledAnchor>Crisp Studio</StyledAnchor>. I'm passionate about tech,
        good food and inspiring movies.
      </Heading>
    </Box>
    <SocialLinks />
  </Box>
);

const StyledHeading = styled(Heading)`
  font-weight: 400;
  font-family: "Libre Baskerville", serif;
`;

const StyledAnchor = styled(Anchor)`
  color: #515151;
  text-decoration: underline;
  text-decoration-color: #01d274;

  &:hover {
    text-decoration-color: #01d274;
  }
`;

export default Welcome;
