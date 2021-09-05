import '../styles/globals.css'
import type { AppProps /*, AppContext */ } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

import { ThemeProvider } from 'next-themes'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ThemeProvider attribute="class">
      {getLayout( <Component {...pageProps} />)}
    </ThemeProvider>
  )
}

export default MyApp
