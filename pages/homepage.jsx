"use client";

import Head from "next/head";
import Layout from "./Layout";
import GetEstimate from "./components/homePage/GetEstimate";
import Hero from "./components/homePage/Hero";
import Ourservices from "./components/homePage/OurServices";
import WhyOurCompany from "./components/homePage/WhyOurCompany";
const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Fuel Up</title>
      </Head>
      <Layout>
        <Hero />
        <Ourservices />
        <GetEstimate />
        <WhyOurCompany />
      </Layout>
    </div>
  );
};

export default HomePage;
