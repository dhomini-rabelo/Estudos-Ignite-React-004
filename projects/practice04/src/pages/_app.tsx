import type { AppProps } from 'next/app'
import Link from 'next/link'
import { globalStyles } from '../layout/styles/global'
import '../layout/styles/globalCss.css'
import Head from 'next/head'
import { Handbag } from 'phosphor-react'
import { useContext, useState } from 'react'
import { Cart } from '../layout/components/Cart'
import { CartContext, CartProvider } from '../code/contexts/cart'

globalStyles()


export default function App({ Component, pageProps }: AppProps) {
  const { data } = useContext(CartContext)
  const hasProductsInTheCart = data && data.products.length > 0
  const [cartViewIsOpened, setCartViewIsOpened] = useState(false)
  const openCartView = () => hasProductsInTheCart && setCartViewIsOpened(true)
  const closeCartView = () => setCartViewIsOpened(false)


  return (
    <>
      <CartProvider>
        <div id="root" className="flex flex-col items-start justify-center min-h-[100vh]">
          <header className="py-8 px-0 w-full max-w-[1180px] mx-auto flex items-center justify-between">
            <Link href="/">
              <img src="/global/logo.svg" alt="project-logo" />
            </Link>
            {hasProductsInTheCart ? (
              <button className="text-Gray-100 p-3 font-bold relative" onClick={openCartView}>
                <div className="w-6 h-6 bg-Green-500 absolute text-center rounded-full -top-2 -right-2">
                  <strong className="text-sm text-White lh-160">1</strong>
                </div>
                <Handbag size={24} />
              </button>
            ) : (
              <button className="text-Gray-500 p-3 font-bold cursor-not-allowed">
                <Handbag size={24} />
              </button>
            )}
          </header>
          <Component {...pageProps} />
        </div>
        {cartViewIsOpened && (
          <Cart handleClose={closeCartView} />
        )}
      </CartProvider>
    </>
  )
}
