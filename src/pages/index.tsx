import React from "react";
import Welcome from "../components/welcome";
import { Layout, Section } from "../components/common";

const Index = () => (
  <Layout>
    <Section background="light-1" pad={{ vertical: "xlarge" }}>
      <Welcome />
    </Section>
  </Layout>
);

export default Index;
