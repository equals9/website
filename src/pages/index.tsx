import React from "react";
import Welcome from "../components/welcome";
import { Layout, Section } from "../components/common";
import ThemeContext from "../util/context";

const Index = () => {
  return (
    <Layout>
      <ThemeContext.Consumer>
        {dark => (
          <Section
            background={dark ? "dark-2" : "light-1"}
            pad={{ vertical: "xlarge" }}
          >
            <Welcome />
          </Section>
        )}
      </ThemeContext.Consumer>
    </Layout>
  );
};

export default Index;
