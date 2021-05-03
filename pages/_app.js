import 'tailwindcss/tailwind.css'
import '../styles.css'
import SiteContentProvider from '../context/SiteContent'
import { useEffect } from 'react'
import {analytics} from '../utils/analytics'
import {useRouter} from 'next/router'

function MyApp({ Component, pageProps }) {

  const routers = useRouter()

  useEffect(() => {
    if(process.env.NODE_ENV === 'production'){
      const logEvent = (url) => {
        analytics().setCurrentScreen(url);
        analytics().logEvent('screen_view');
      };

      routers.events.on('routeChangeComplete', logEvent);
      
      //For First Page
      logEvent(window.location.pathname);

      //Remvove Event Listener after un-mount
      return () => {
        routers.events.off('routeChangeComplete', logEvent);
      };
    }
  }, [])

  return (
    <SiteContentProvider>
      <Component {...pageProps} />
    </SiteContentProvider>
  )
}

export default MyApp
