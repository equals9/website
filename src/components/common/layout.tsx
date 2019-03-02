import React from "react";
import { Grommet } from "grommet";
import { createGlobalStyle } from "styled-components";
import { Header, Footer } from "./";
import theme from "../../theme";

const GlobalStyle = createGlobalStyle`
  @import url('https://rsms.me/inter/inter.css');
  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville');
  
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

export const Layout = ({ children }) => (
  <Grommet theme={theme}>
    <GlobalStyle />
    <Header />
    <main>{children}</main>
    <Footer />
  </Grommet>
);

export default Layout;
