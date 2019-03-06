import React from "react";
import { Box } from "grommet";
import styled from "styled-components";
import logoLight from "../../content/images/logo-light.svg";
import logoDark from "../../content/images/logo-dark.svg";

interface LogoProps {
  dark?: boolean;
}

const Logo: React.SFC<LogoProps> = ({ dark }) => (
  <LogoContainer>
    <img src={dark ? logoLight : logoDark} />
  </LogoContainer>
);

const LogoContainer = styled(Box)`
  width: 60px;
  height: auto;
  display: block;
`;

export default Logo;
