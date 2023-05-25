import React from "react"
import Hero from "./components/services/Hero"
import OurServices from "./components/services/OurServices"
import Workflow from "./components/services/Workflow"
import Navbar from "@/pages/components/Navbar"
import Footer from "@/pages/components/Footer"
import workflowdata from "../data/workflowdata"
import Layout from "./Layout"
import Head from "next/head"
const Services = () => {
  return (
    <div>
         <Head>
        <title>Fuel Up | Services</title>
        </Head>
        <Layout>
        <Hero/>
        <OurServices/>
        <Workflow data={workflowdata[0]} color={"#153240"}/>
        <Workflow data={workflowdata[1]} color={"#D9D9D9"}/>
        <Workflow data={workflowdata[2]} color={"#153240"}/>
        </Layout>
    </div>
  )
}

export default Services