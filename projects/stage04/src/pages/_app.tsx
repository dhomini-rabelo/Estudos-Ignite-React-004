import type { AppProps } from 'next/app'
import { globalStyles } from '../layout/styles/global'
import '../layout/styles/globalCss.css'

globalStyles()


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="root" className="flex flex-col items-start justify-center min-h-[100vh]">
      <header className="py-8 px-0 w-full max-w-[1180px] mx-auto">
        <img src="/global/logo.svg" alt="project-logo" />
      </header>
      <Component {...pageProps} />
    </div>
  )
}
