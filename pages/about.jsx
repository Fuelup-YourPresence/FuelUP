"use client";

import Head from "next/head";
import Layout from "./Layout";
import AboutUsDesc from "./components/about/AboutUsDesc";
import Hero from "./components/about/Hero";
import OurValues from "./components/about/OurValues";
const About = () => {
  return (
    <div>
      <Head>
        <title>Fuel Up | About</title>
      </Head>
      <Layout>
        <Hero />
        <OurValues />
        <AboutUsDesc />
      </Layout>
    </div>
  );
};

export default About;
