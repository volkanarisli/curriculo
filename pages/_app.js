import '../styles/globals.scss'
import Head from 'next/head'
import ResumeInfoProvider from '../context/ResumeInfo'


const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <ResumeInfoProvider>
      <Head>
        <title>Curriculo</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <Component {...pageProps} />
    </ResumeInfoProvider>
  )
}

export default MyApp
