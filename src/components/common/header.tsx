import React from "react";
import { Box, Text, FormField, CheckBox } from "grommet";
import { Section } from "./index";
import Link from "./link";
import styled from "styled-components";
import Logo from "./logo";
import ThemeContext from "../../util/context";

const Header: React.SFC = () => (
  <ThemeContext.Consumer>
    {theme => (
      <Section
        pad={{ vertical: "medium" }}
        background={theme.dark ? "dark-1" : "light-1"}
      >
        <Box direction="row" justify="between" align="center">
          <Link to="/" label={theme.dark ? <Logo dark /> : <Logo />} />
          <Box direction="row" gap="medium">
            <StyledLink
              to="/about"
              color={theme.dark ? "light-1" : "dark-3"}
              label={
                <Text>
                  <Prefix weight="normal" color="brand">
                    01.
                  </Prefix>{" "}
                  About
                </Text>
              }
            />
            <StyledLink
              to="/photography"
              color={theme.dark ? "light-1" : "dark-3"}
              label={
                <Text>
                  <Prefix weight="normal" color="brand">
                    02.
                  </Prefix>{" "}
                  Photography
                </Text>
              }
            />
          </Box>
        </Box>
      </Section>
    )}
  </ThemeContext.Consumer>
);

const Prefix = styled(Text)`
  text-transform: uppercase;
  font-family: "Inconsolata", monospace;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    color: #01d274;
    text-decoration: none;
  }
`;

export default Header;
