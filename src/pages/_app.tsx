import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MetaContextProvider } from '../contexts/MetaContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MetaContextProvider>
        <Component {...pageProps} />
      </MetaContextProvider>
    </>
  )
}
