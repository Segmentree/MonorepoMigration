import { useGtm } from '@gtm-support/vue2-gtm';
import { RouteLocationNormalized } from 'vue-router';

export function triggerRouteGTM(
  route: RouteLocationNormalized,
  meta: { title: string }
) {
  const gtm = useGtm();
  const payload = {
    event: 'Loaded a Page',
    url: window.location.href,
    title: meta.title,
    path: route.path,
    referrer: document.referrer,
  };

  if (gtm) {
    gtm.trackEvent(payload);
  }
}
