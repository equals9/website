import React from "react";
import { Box } from "grommet";

const Container = ({ children }) => (
  <Box width="xlarge" alignSelf="center" pad="large">
    {children}
  </Box>
);

export default Container;
