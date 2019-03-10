import React from "react";
import { Box, Text, CheckBox } from "grommet";
import { Section } from "../common/";
import ThemeContext from "../../util/context";

const Footer = () => (
  <ThemeContext.Consumer>
    {theme => (
      <Section
        background={theme.dark ? "dark-2" : "light-2"}
        pad={{ vertical: "small" }}
      >
        <Box direction="row" justify="between">
          <Text> Designed and built by Daniel Wirtz </Text>
          <CheckBox
            label={theme.dark ? "Dark" : "Light"}
            checked={theme.dark}
            onChange={theme.toggleDark}
            toggle
          />
        </Box>
      </Section>
    )}
  </ThemeContext.Consumer>
);

export default Footer;
