
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import Hero from '../components/landing/Hero';
import LogoCloud from '../components/landing/LogoCloud';
import ProductInfo from '../components/landing/ProductInfo';
import AiInfo from '../components/landing/AiInfo';
import GetMailSubs from '../components/landing/GetMailSubs';
import Pricing from '../components/landing/Pricing';
import Tryout from '../components/landing/Tryout';
import { useUser } from '../context/UserInfo'
import axios from 'axios';
import Head from 'next/head';





const Home = ({ plans }) => {
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
    <>
      <Head>
        <title>Curriculo</title>
        <meta name="title" content="Curriculo.design" />
        <meta name="description" content="Get the perfect resume and cover letter in seconds with our AI-powered resume copywriting and cover letter generation tool." />
        <meta property="og:url" content="https://www.curriculo.design/" />
        <meta property="og:title" content="Curriculo.design" />
        <meta property="og:description" content="Get the perfect resume and cover letter in seconds with our AI-powered resume copywriting and cover letter generation tool." />
        <meta property="og:image" content="https://www.curriculo.design/meta.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.curriculo.design/" />
        <meta property="twitter:title" content="Curriculo.design" />
        <meta property="twitter:description" content="Get the perfect resume and cover letter in seconds with our AI-powered resume copywriting and cover letter generation tool." />
        <meta property="twitter:image" content="https://www.curriculo.design/meta.png" />
      </Head>
      <div>

        <Hero />
        <LogoCloud />
        <ProductInfo />
        <Tryout />
        <AiInfo />
        <GetMailSubs />
        {/* <Pricing plans={plans} /> */}
      </div>
    </>
  )
}

// export const getServerSideProps = async () => {
//   const { data: { response } } = await axios.post(`${process.env.PADDLE_API_URL}2.0/subscription/plans`,
//     {
//       vendor_id: process.env.PADDLE_VENDOR_ID,
//       vendor_auth_code: process.env.PADDLE_API_AUTH_CODE
//     }
//   );
//   const plans = response.map((option) => {
//     return { ...option, title: `${option.name} - ${option.recurring_price.USD}$` }
//   })
//   return {
//     props: {
//       plans
//     }
//   }
// }

export default Home





