import React, { useState, useEffect, useCallback } from 'react'
import { analytics } from '../utils/analytics'
import { useRouter } from 'next/router'

type LogEvent = ( event: string, eventParams?: { [key: string]: string } ) => void

const useAnalytics = (): { logEvent: LogEvent } => {

    const router = useRouter()
    const [ currentUrl, setCurrentUrl ] = useState<string>('default')

    const logEvent = useCallback<LogEvent>(( event, eventParams ) => {

        if(process.env.NODE_ENV === 'production' && Boolean( document )) {
            analytics().setCurrentScreen(currentUrl);
            analytics().logEvent(event, eventParams);
        }
    }, [ currentUrl ]);

    useEffect(() => {
        router.events.on('routeChangeStart', setCurrentUrl);

        //Remvove Event Listener after un-mount
      return () => {
        router.events.off('routeChangeStart', setCurrentUrl);
      };
    }, [])

    return {
        logEvent
    }
}

export default useAnalytics
