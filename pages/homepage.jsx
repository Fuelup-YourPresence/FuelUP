import React, { use } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/homePage/Hero'
import Ourservices from './components/homePage/OurServices'
import GetEstimate from './components/homePage/GetEstimate'
import WhyOurCompany from './components/homePage/WhyOurCompany'
import Footer from './components/Footer'
import Layout from './Layout'
const HomePage = () => {
  return (
    <div>
       <Layout>
        <Hero/>
        <Ourservices/>
        <GetEstimate/>
        <WhyOurCompany/>
        </Layout>
        </div>
  )
}

export default HomePage