import React from "react";
import { Box, Text } from "grommet";
import { Container } from "../common/";

const Footer = () => (
  <Box background="dark-1" pad={{ vertical: "small" }}>
    <Container>
      <Text textAlign="center">Designed and built by Daniel Wirtz</Text>
    </Container>
  </Box>
);

export default Footer;
