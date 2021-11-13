import { GA_TRACKING_ID } from 'helpers/constants';
import { isProd } from 'helpers/env';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (!isProd()) return;
  //@ts-ignore
  window && window.tag && window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
};

interface GtagEvent {
  action: string;
  category?: string;
  label?: string;
  value: string;
}
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GtagEvent) => {
  if (!isProd()) return;
  //@ts-ignore
  window && window.tag && window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
};
