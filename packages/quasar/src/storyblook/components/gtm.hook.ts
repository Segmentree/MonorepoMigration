import { useGtm } from '@gtm-support/vue2-gtm';
import { RootContext } from '../../../../utils/src';

export function triggerRouteGTM(root: RootContext, meta: {title: string}) {
    const gtm = useGtm();

    const payload = {
      event: 'Loaded a Page',
      url: window.location.href,
      title: meta.title,
      path: root.$route.path,
      referrer: document.referrer
    };

    gtm.trackEvent(payload);
}
