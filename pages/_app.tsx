import '../styles/globals.css'
import Layout from "../components/Layout/layout";
import type { AppProps /*, AppContext */ } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout> 
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
