import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../layout/styles'


export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        <title>Ignite Shop</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}