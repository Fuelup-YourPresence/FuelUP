import React from 'react'
import Quotes from './components/plans/Quotes'
import Navbar from '@/pages/components/Navbar'
import Footer from '@/pages/components/Footer'
import Layout from './Layout'
import Head from 'next/head'
const PriceQuote = () => {
  return (
    <div >
         <Head>
        <title>Fuel Up | Plans</title>
        </Head>
        <Layout>
        <Quotes/>
        </Layout>
    </div>
  )
}

export default PriceQuote