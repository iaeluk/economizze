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
        <title>Economizze</title>
      </Head>
      {hasMontante ? <App /> : <Home />}
    </>
  )
}
