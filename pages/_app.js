import 'tailwindcss/tailwind.css'
import '../styles.css'
import SiteContentProvider from '../context/SiteContent'

function MyApp({ Component, pageProps }) {
  return (
    <SiteContentProvider>
      <Component {...pageProps} />
    </SiteContentProvider>
  )
}

export default MyApp
