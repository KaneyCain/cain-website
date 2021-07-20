import '../styles/globals.css'
import Layout from "../components/Layout/layout";
import type { AppProps /*, AppContext */ } from 'next/app'

import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {


  return (
    <ThemeProvider>
      <Layout> 
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
