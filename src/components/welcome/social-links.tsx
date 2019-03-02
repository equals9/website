import React from "react";
import { Box, Button } from "grommet";
import { GitHub, Twitter, Instagram, Linkedin } from "react-feather";
import styled from "styled-components";

const SocialLinks = () => (
  <Box direction="row" gap="xsmall">
    <StyledTwitter
      href="https://twitter.com/wirtzdan"
      icon={<Twitter />}
      hoverIndicator="#e5effa"
    />
    <StyledGitHub
      href="https://github.com/wirtzdan"
      icon={<GitHub />}
      hoverIndicator="#fbe9fa"
    />
    <StyledInstagram
      href="https://instagram.com/danielwirtz"
      icon={<Instagram />}
      hoverIndicator="#f9efe2"
    />
    <StyledLinkedIn
      href="https://www.linkedin.com/in/wirtzdan/"
      icon={<Linkedin />}
      hoverIndicator="#e3f8fa"
    />
  </Box>
);

const StyledTwitter = styled(Button)`
  &:hover {
    border-radius: 18px;

    svg {
      stroke: #003d87;
    }
  }
`;

const StyledGitHub = styled(Button)`
  &:hover {
    border-radius: 18px;

    svg {
      stroke: #8a003e;
    }
  }
`;

const StyledInstagram = styled(Button)`
  &:hover {
    border-radius: 18px;

    svg {
      stroke: #894b00;
    }
  }
`;

const StyledLinkedIn = styled(Button)`
  &:hover {
    border-radius: 18px;

    svg {
      stroke: #00848a;
    }
  }
`;

export default SocialLinks;
