import type { AppProps } from 'next/app'
import { globalStyles } from '../layout/styles/global'
import '../layout/styles/globalCss.css'
import { CartProvider } from '../code/contexts/cart'
import { Header } from '../layout/components/Header'

globalStyles()

export default function App({ Component: PageComponent, pageProps }: AppProps) {
  return (
    <>
      <CartProvider>
        <div id="root" className="flex flex-col items-start justify-center min-h-[100vh]">
          <Header />
          <PageComponent {...pageProps} />
        </div>
      </CartProvider>
    </>
  )
}
