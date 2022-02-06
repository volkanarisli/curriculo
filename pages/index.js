
import { useState, useEffect } from 'react';
import router from 'next/router'
import Hero from '../components/landing/Hero';
import Nav from '../components/common/Nav';
import LogoCloud from '../components/landing/LogoCloud';
import ProductInfo from '../components/landing/ProductInfo';
import AiInfo from '../components/landing/AiInfo';
import GetMailSubs from '../components/landing/GetMailSubs';
import Pricing from '../components/landing/Pricing';
import Footer from '../components/landing/Footer';
const Home = () => {
  // useEffect(() => {

  //   router.push('/index.html')
  // }, [])
  return (
    <div>
      <Nav />
      <Hero />
      <LogoCloud />
      <ProductInfo />
      <AiInfo />
      <GetMailSubs />
      <Pricing />
      <Footer />
    </div>
  )
}
export default Home