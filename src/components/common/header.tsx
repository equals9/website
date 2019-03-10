import React, { useState } from "react";
import { Box, Text, FormField, CheckBox, Layer } from "grommet";
import { Section } from "./index";
import Link from "./link";
import styled from "styled-components";
import Logo from "./logo";
import ThemeContext from "../../util/context";
import { Spin } from "react-burgers";

const Header: React.SFC = () => {
  const [active, setActive] = useState(false);

  return (
    <ThemeContext.Consumer>
      {theme => (
        <Section
          pad={{ vertical: "medium" }}
          background={theme.dark ? "dark-1" : "light-1"}
        >
          <Box direction="row" justify="between" align="center">
            <Link to="/" label={theme.dark ? <Logo dark /> : <Logo />} />
            <Box direction="row" gap="medium">
              {/* <StyledLink
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
              /> */}
              <StyledSpin
                color={theme.dark ? "#ffffff" : "#3B3B3B"}
                borderRadius={5}
                active={active}
                onClick={() => setActive(!active)}
              />
              {active && (
                <Layer full>
                  <Box
                    fill
                    background="light-1"
                    align="center"
                    justify="center"
                  />
                </Layer>
              )}
            </Box>
          </Box>
        </Section>
      )}
    </ThemeContext.Consumer>
  );
};

const StyledSpin = styled(Spin)`
  z-index: 20;
  position: relative;
`;

// const Prefix = styled(Text)`
//   text-transform: uppercase;
//   font-family: "Inconsolata", monospace;
// `;

// const StyledLink = styled(Link)`
//   text-decoration: none;

//   &:hover {
//     color: #01d274;
//     text-decoration: none;
//   }
// `;

export default Header;
