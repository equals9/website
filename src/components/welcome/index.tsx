import React from "react";
import SocialLinks from "./social-links";
import styled from "../../util/styled-components";
import { Anchor, Box, Heading } from "grommet";
import ThemeContext from "../../util/context";

const Welcome = () => (
  <ThemeContext.Consumer>
    {theme => (
      <Box gap="large">
        <Box gap="xsmall">
          <StyledHeading color="brand" size="small" margin="none">
            Hey, I'm Daniel. Nice to meet you.
          </StyledHeading>
          <Heading margin="none">
            I'm a Designer, Developer and Co-Founder at{" "}
            <StyledAnchor
              color={theme.dark ? "light-1" : "dark-3"}
              href="https://crisp.studio"
            >
              Crisp Studio
            </StyledAnchor>
            . I'm passionate about tech, good food and inspiring movies.
          </Heading>
        </Box>
        <SocialLinks />
      </Box>
    )}
  </ThemeContext.Consumer>
);

const StyledHeading = styled(Heading)`
  font-weight: 400;
  font-family: "Inconsolata", monospace;
`;

const StyledAnchor = styled(Anchor)`
  text-decoration: underline;
  text-decoration-color: ${p => p.theme.global.colors["accent-1"]};

  &:hover {
    text-decoration-color: ${p => p.theme.global.colors["accent-1"]};
  }
`;

export default Welcome;
