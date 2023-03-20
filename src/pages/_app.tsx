import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MetaContextProvider } from '../contexts/MetaContext'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
   <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="fullscreen" content="yes" />
        <meta name="screen-orientation" content="portrait" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <MetaContextProvider>
        <Component {...pageProps} />
      </MetaContextProvider>
    </>
  )
}
