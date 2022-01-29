import '../styles/globals.scss'
import Head from 'next/head'
import ResumeInfoProvider from '../context/resumeInfo'


const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <ResumeInfoProvider>
      <Head>
        <title>Curriculo</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </ResumeInfoProvider>
  )
}

export default MyApp
