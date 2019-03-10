import React from "react";
import RecentEpisodes from "../components/recentEpisodes";
import RecentMovies from "../components/recentMovies";
import ThemeContext from "../util/context";
import { Heading } from "grommet";
import { Layout, Section } from "../components/common";

const About = () => (
  <Layout>
    <ThemeContext.Consumer>
      {theme => (
        <>
          <Section background={theme.dark ? "dark-1" : "light-1"}>
            <Heading level="2">
              If you want to get to know me, this is the perfect site for you.
              I'm gathring data from various sources and displaying them here.
            </Heading>
          </Section>
          <Section background={theme.dark ? "dark-1" : "light-1"}>
            <RecentMovies limit={6} />
          </Section>
          <Section background={theme.dark ? "dark-1" : "light-1"}>
            <RecentEpisodes limit={6} />
          </Section>
        </>
      )}
    </ThemeContext.Consumer>
  </Layout>
);

export default About;
