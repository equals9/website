import React from "react";
import { Box } from "grommet";
import Container from "./container";

const Section = ({ children, ...props }) => (
  <Box pad={{ vertical: "large" }} align="center" {...props}>
    <Container>{children}</Container>
  </Box>
);

export default Section;
