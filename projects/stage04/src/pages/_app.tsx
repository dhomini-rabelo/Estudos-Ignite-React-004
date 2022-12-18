import type { AppProps } from 'next/app'
import { globalStyles } from '../layout/styles/global'
import '../layout/styles/globalCss.css'

globalStyles()


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="root">
      <header>
        <img src="/global/logo.svg" alt="project-logo" />
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  )
}
