import type { AppProps } from 'next/app'
import Link from 'next/link'
import { globalStyles } from '../layout/styles/global'
import '../layout/styles/globalCss.css'
import Head from 'next/head'
import { Handbag } from 'phosphor-react'
import { useState } from 'react'
import { Cart } from '../layout/components/Cart'

globalStyles()


export default function App({ Component, pageProps }: AppProps) {
  const [cartViewIsOpened, setCartViewIsOpened] = useState(false)
  const openCartView = () => setCartViewIsOpened(true)
  const closeCartView = () => setCartViewIsOpened(false)


  return (
    <>
      <div id="root" className="flex flex-col items-start justify-center min-h-[100vh]">
        <header className="py-8 px-0 w-full max-w-[1180px] mx-auto flex items-center justify-between">
          <Link href="/">
            <img src="/global/logo.svg" alt="project-logo" />
          </Link>
          <button className="text-Gray-500 p-3 font-bold" onClick={openCartView}>
            <Handbag size={24} />
          </button>
        </header>
        <Component {...pageProps} />
      </div>
      {cartViewIsOpened && (
        <Cart handleClose={closeCartView} />
      )}
    </>
  )
}
