import type { AppProps } from 'next/app'
import { globalStyles } from '../core/styles/global'
import '../core/styles/globalCss.css'

globalStyles()


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
