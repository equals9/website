import React from "react";
import { Box, Text } from "grommet";
import { Section } from "./index";
import Link from "./link";
import styled from "styled-components";

const Header = () => (
  <Section pad={{ vertical: "medium" }} background="light-1">
    <Box direction="row" justify="between" align="center">
      <Box>
        <StyledLink
          to="/"
          color="dark-3"
          label={
            <Text>
              <Text color="brand">DW</Text>
            </Text>
          }
        />
      </Box>
      <Box direction="row-responsive" gap="medium">
        <StyledLink
          to="/about"
          color="dark-3"
          label={
            <Text>
              <Text color="brand">01.</Text> About
            </Text>
          }
        />
        <StyledLink
          to="/photography"
          color="dark-3"
          label={
            <Text>
              <Text color="brand">02.</Text> Photography
            </Text>
          }
        />
        <StyledLink
          to="/contact"
          color="dark-3"
          label={
            <Text>
              <Text color="brand">03.</Text> Contact
            </Text>
          }
        />
      </Box>
    </Box>
  </Section>
);

const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    color: #01d274;
    text-decoration: none;
  }
`;

export default Header;
