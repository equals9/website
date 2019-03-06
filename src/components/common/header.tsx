import React from "react";
import { Box, Text, FormField, CheckBox } from "grommet";
import { Section } from "./index";
import Link from "./link";
import styled from "styled-components";
import Logo from "./logo";
import ThemeContext from "../../util/context";

interface HeaderProps {
  setDark?: (value: boolean) => void;
}

const Header: React.SFC<HeaderProps> = ({ setDark }) => (
  <ThemeContext.Consumer>
    {dark => (
      <Section
        pad={{ vertical: "medium" }}
        background={dark ? "dark-2" : "light-1"}
      >
        <Box direction="row" justify="between" align="center">
          <Link to="/" label={dark ? <Logo dark /> : <Logo />} />
          <Box direction="row" gap="medium">
            <StyledLink
              to="/about"
              color={dark ? "light-1" : "dark-3"}
              label={
                <Text>
                  <Text color="brand">01.</Text> About
                </Text>
              }
            />
            <StyledLink
              to="/photography"
              color={dark ? "light-1" : "dark-3"}
              label={
                <Text>
                  <Text color="brand">02.</Text> Photography
                </Text>
              }
            />
            <CheckBox
              label={dark ? "Dark" : "Light"}
              checked={dark}
              onChange={() => setDark(!dark)}
              toggle
            />
          </Box>
        </Box>
      </Section>
    )}
  </ThemeContext.Consumer>
);

const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    color: #01d274;
    text-decoration: none;
  }
`;

export default Header;
