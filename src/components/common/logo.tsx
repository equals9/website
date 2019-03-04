import React from "react";
import { Box } from "grommet";
import styled from "styled-components";
import logo from "../../content/images/logo-round.svg";

const Logo = () => (
  <LogoContainer>
    <img src={logo} />
  </LogoContainer>
);

const LogoContainer = styled(Box)`
  width: 60px;
  height: auto;
  display: block;
`;

export default Logo;
