import type { AppProps } from 'next/app'
import Link from 'next/link'
import { globalStyles } from '../layout/styles/global'
import '../layout/styles/globalCss.css'
import Head from 'next/head'

globalStyles()


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ignite Shop</title>
      </Head>
      <div id="root" className="flex flex-col items-start justify-center min-h-[100vh]">
        <header className="py-8 px-0 w-full max-w-[1180px] mx-auto">
          <Link href="/">
            <img src="/global/logo.svg" alt="project-logo" />
          </Link>
        </header>
        <Component {...pageProps} />
      </div>
    </>
  )
}
