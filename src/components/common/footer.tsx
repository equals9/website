import React from "react";
import { Box, Text, CheckBox } from "grommet";
import { Section } from "../common/";
import Link from "./link";
import ThemeContext from "../../util/context";

const Footer = () => (
  <ThemeContext.Consumer>
    {theme => (
      <Section
        background={theme.dark ? "dark-2" : "light-2"}
        pad={{ vertical: "xsmall" }}
      >
        <Box direction="row-responsive" justify="between">
          <Text> Designed and built by Daniel Wirtz </Text>
          <Box direction="row" gap="small" alignSelf="center">
            <Link to="/disclaimer" label="Disclaimer" />
            <Link to="/privacy" label="Privacy" />
            <CheckBox
              label={theme.dark ? "Dark" : "Light"}
              checked={theme.dark}
              onChange={theme.toggleDark}
              toggle
            />
          </Box>
        </Box>
      </Section>
    )}
  </ThemeContext.Consumer>
);

export default Footer;
