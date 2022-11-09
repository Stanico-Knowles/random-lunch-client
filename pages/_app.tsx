import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer} from 'react-toastify'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <ToastContainer theme='colored'    />
        <Component {...pageProps} />
    </>

  )
}

export default MyApp;