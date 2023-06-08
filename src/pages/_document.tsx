import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.cdnfonts.com/css/poly" rel="stylesheet" />
        <link rel="icon" href="/img/logo_favicon.svg" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}