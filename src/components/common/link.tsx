import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Anchor as GrommetLink } from "grommet";
import styled from "styled-components";

const Link = ({ to, label, ...props }) => (
  <StyledAniLink cover direction="up" to={to} bg="#01d274" duration={1}>
    <GrommetLink as="span" label={label} {...props} />
  </StyledAniLink>
);

const StyledAniLink = styled(AniLink)`
  text-decoration: none;
  color: inherit;
  :visited {
    color: inherit;
  }
`;

export default Link;
