import Head from 'next/head';
import Home from './Home';
import App from './App';
import { MetaContext } from '@/contexts/MetaContext';
import { useContext } from 'react';

export default function Index() {
  const { hasMontante } = useContext(MetaContext)
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="fullscreen" content="yes" />
        <meta name="screen-orientation" content="portrait" />
        <title>Economizze</title>
      </Head>
          {hasMontante ? <App /> : <Home />}
        </>
        )
}
