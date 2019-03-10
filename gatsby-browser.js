import React from "react";

import { ThemeProvider } from "./src/util/context";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
