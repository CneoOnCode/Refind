import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-auto my-10 max-w-screen-2xl">
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
