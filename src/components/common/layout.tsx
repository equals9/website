import React, { useState } from "react";
import { Grommet } from "grommet";
import { createGlobalStyle } from "styled-components";
import { Header, Footer } from "./";
import theme from "../../theme";
import useThemeToggle from "../../util/theme-toggle";
import ThemeContext from "../../util/context";

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

interface LayoutProps {
  dark?: boolean;
}

const Layout: React.SFC<LayoutProps> = ({ children }) => {
  const [dark, setDark] = useState(false);

  return (
    <ThemeContext.Provider value={dark}>
      <Grommet theme={theme}>
        <GlobalStyle />
        <Header setDark={setDark} />
        <main>{children}</main>
        <Footer />
      </Grommet>
    </ThemeContext.Provider>
  );
};

export default Layout;
