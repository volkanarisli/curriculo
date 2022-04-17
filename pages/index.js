
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Hero from '../components/landing/Hero';
import Nav from '../components/common/Nav';
import LogoCloud from '../components/landing/LogoCloud';
import ProductInfo from '../components/landing/ProductInfo';
import AiInfo from '../components/landing/AiInfo';
import GetMailSubs from '../components/landing/GetMailSubs';
import Pricing from '../components/landing/Pricing';
import Footer from '../components/landing/Footer';
import { useUser } from '../context/UserInfo'





const Home = () => {
  const { setSubscriptionIdOfUser, user } = useUser()
  const router = useRouter()
  useEffect(() => {
    let searchParams = new URLSearchParams(router.asPath.split('#').join('&'));
    const type = searchParams.get('type');
    const token = searchParams.get('access_token')
    if (type === 'recovery') {
      router.push({ pathname: '/update-password', query: { at: token } })
    }
  }, [router])
  useEffect(() => {
    if (user) {
      setSubscriptionIdOfUser()
      router.push('/dashboard')
    }
  }, [user, router, setSubscriptionIdOfUser])
  return (
    <div>
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





