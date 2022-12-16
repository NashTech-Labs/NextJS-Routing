import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavMenu from '../components/NavMenu'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
    <NavMenu/>
    <Component {...pageProps} />
    </>
     
  )
}
