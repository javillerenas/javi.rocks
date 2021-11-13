import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { pageview } from 'lib/gtag';
import { isProd } from 'helpers/env';

export const useAnalytics = () => {
  const router = useRouter();

  // Disable google analytics when not in production
  // More info: https://developers.google.com/analytics/devguides/collection/gtagjs/user-opt-out
  useEffect(() => {
    if (!isProd()) {
      //@ts-ignore
      window['ga-disable-GA_MEASUREMENT_ID'] = true;
    }
  }, []);

  // Track every route change
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
};
