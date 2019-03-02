import React from "react";
import { Box } from "grommet";

const Container = ({ children }) => (
  <Box width="xlarge" alignSelf="center">
    {children}
  </Box>
);

export default Container;
