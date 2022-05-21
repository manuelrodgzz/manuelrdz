import 'tailwindcss/tailwind.css'
import '../styles.css'
import SiteContentProvider from '../context/SiteContent'
import { useEffect } from 'react'
import {analytics} from '../utils/analytics'
import {useRouter} from 'next/router'
import useAnalytics from '../hooks/useAnalytics'

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  const { logEvent } = useAnalytics()

  useEffect(() => {
    logEvent('screen_view')
  }, [ router.pathname ])

  return (
    <SiteContentProvider>
      <Component {...pageProps} />
    </SiteContentProvider>
  )
}

export default MyApp
