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
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Economizze</title>
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
      </Head>
      {hasMontante ? <App /> : <Home />}
    </>
  )
}
