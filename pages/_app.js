import '../assets/styles/globals.scss'
import Head from 'next/head'
import UserProvider from '../context/UserInfo'
import { useEffect, useState } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'
import * as gtag from '../utils/gtag'
import Nav from '../components/common/Nav'
import TagManager from 'react-gtm-module';

const isProduction = process.env.ENV === "production";


const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  const router = useRouter()
  const hideNav = ['/dashboard', '/design',
    '/upwork-proposal-letter', '/cover-letter',
    '/employment-summary', '/professional-summary',
    '/educational-summary'].includes(router.pathname)
  useEffect(() => {
    function initDesk360Chat() {
      window.desk360Chat.init({
        token: "3JVxCP0jQ60GfgwhoLKCdd4JUuv33og1oKR1zYOyTLTPOHCcvPw0rs4oQIULQstLNTgRsxFxMeZknZZF",
        host: "https://curriculo.desk360.com/"
      });
    }
    function initialize(t, i) { var e, a = btoa((new Date).toDateString()).toLowerCase(); t.getElementById(i) ? initDesk360Chat() : ((e = t.createElement("script")).id = i, e.async = !0, e.src = "https://curriculo.desk360.com/widgets/chat/sdk.js?".concat(a), e.onload = initDesk360Chat, t.head.appendChild(e)) }
    function initiateCall() { initialize(document, "desk360chat-js-sdk") }
    window.addEventListener ? window.addEventListener("load", initiateCall, !1) : window.attachEvent("load", initiateCall, !1);
  }, [])
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (isProduction) gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-PVS2FNZ' });
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <UserProvider>
        <Head>
          <title>Curriculo</title>
          <link rel="icon" href="/favicon.svg" />
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
        {
          !hideNav && <Nav />
        }
        <Component {...pageProps} />
      </UserProvider>
    </>
  )
}

export default MyApp
