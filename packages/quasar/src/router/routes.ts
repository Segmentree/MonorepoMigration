import { RouteRecordRaw } from 'vue-router';
import { LandingLayout } from '../components';
import { RoutedPage } from '../storyblook';

const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: LandingLayout,
    children: [
      {
        path: '/',
        component: RoutedPage,      
        props: () => ({
          slug: 'home'
        })
      },
      {
        path: 'en/',
        component: RoutedPage,
        props: () => ({
          slug: 'home'
        })
      },
      {
        path: ':slug',
        component: RoutedPage,
        props: true
      },
      {
        path: 'en/:slug',
        component: RoutedPage,
        props: true
      },
      {
        path: '/:slug+',
        component: RoutedPage,
        props: true
      }
    ],
    props: (route) => ({
      locale: route.query.locale
    })
  }
];

export default routes;
