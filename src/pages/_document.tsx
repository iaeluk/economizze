import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/icon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/icon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <body className='font-ibm min-h-screen'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
