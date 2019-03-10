import React, { useState } from "react";
import { Grommet } from "grommet";
import { createGlobalStyle } from "styled-components";
import { Header, Footer } from "./";
import wirtz from "../../theme";
import useThemeToggle from "../../util/theme-toggle";
import ThemeContext from "../../util/context";

const GlobalStyle = createGlobalStyle`
  @import url('https://rsms.me/inter/inter.css');
  @import url('https://fonts.googleapis.com/css?family=Inconsolata');
  
  img {
    max-width: 100%;
  }
  body {
    margin: 0;
  }
  a:hover {
    opacity: 0.9;
  }
`;

interface LayoutProps {
  dark?: boolean;
}

const Layout: React.SFC<LayoutProps> = ({ children }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Grommet theme={wirtz}>
          <GlobalStyle />
          <Header />
          <main>{children}</main>
          <Footer />
        </Grommet>
      )}
    </ThemeContext.Consumer>
  );
};

export default Layout;
