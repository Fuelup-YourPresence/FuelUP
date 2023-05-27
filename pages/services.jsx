"use client";

import Head from "next/head";
import workflowdata from "../data/workflowdata";
import Layout from "./Layout";
import Hero from "./components/services/Hero";
import OurServices from "./components/services/OurServices";
import Workflow from "./components/services/Workflow";
const Services = () => {
  return (
    <div>
      <Head>
        <title>Fuel Up | Services</title>
      </Head>
      <Layout>
        <Hero />
        <OurServices />
        <Workflow data={workflowdata[0]} color={"#153240"} />
        <Workflow data={workflowdata[1]} color={"#D9D9D9"} />
        <Workflow data={workflowdata[2]} color={"#153240"} />
      </Layout>
    </div>
  );
};

export default Services;
