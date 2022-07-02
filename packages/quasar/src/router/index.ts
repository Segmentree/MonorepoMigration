// import { route } from 'quasar/wrappers';
import {
  createRouter,
  createWebHashHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
} from 'vue-router';
// import { Store } from 'vuex';
// import { StateInterface } from '../store';
import routes from './routes';

const EN = 'en';
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

const router = createRouter({
  // scrollBehavior: ( ) => ({ x: 0, y: 0 }),
  routes,
  history: createWebHashHistory(),
});

// export default route<Store<StateInterface>>(function () {
//   return router;
// });

export { router };

function customNext(to: RouteLocationNormalized, next: NavigationGuardNext) {
  if (
    // Vue['$alias'].addEnglishPrefixList.includes(to.fullPath) ||
    to.query.locale &&
    EN.includes(to.query.locale as string)
  ) {
    next({ path: 'en' + to.path });
  } else {
    next();
  }
}

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({ name: 'login' });
    } else {
      customNext(to, next);
    }
  } else {
    customNext(to, next);
  }
});
