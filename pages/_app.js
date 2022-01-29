import '../styles/globals.scss'
import ResumeInfoProvider from '../context/resumeInfo'
import ResumeInfo from '../context/resumeInfo'

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <ResumeInfoProvider>
      <Component {...pageProps} />
    </ResumeInfoProvider>
  )
}

export default MyApp
