"use client";

import Head from "next/head";
import Layout from "./Layout";
import Quotes from "./components/plans/Quotes";
const PriceQuote = () => {
  return (
    <div>
      <Head>
        <title>Fuel Up | Contact Us</title>
      </Head>
      <Layout>
        <Quotes />
      </Layout>
    </div>
  );
};

export default PriceQuote;
