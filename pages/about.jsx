import React from 'react'
import Hero from './components/about/Hero'
import AboutUsDesc from './components/about/AboutUsDesc'
import OurValues from './components/about/OurValues'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Layout from './Layout'
import Head from 'next/head'
const About = () => {
  return (
    <div>
        <Head>
        <title>Fuel Up | About</title>
        </Head>
        <Layout>
        <Hero/>
        <OurValues/>
        <AboutUsDesc/>
        </Layout>
    </div>
  )
}

export default About