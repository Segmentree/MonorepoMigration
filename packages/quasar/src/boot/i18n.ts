// import { boot } from 'quasar/wrappers';
import messages from '../i18n';
// import Vue from 'vue';
import { createI18n } from 'vue-i18n';

export const i18n = createI18n({
  locale: 'nl',
  fallbackLocale: 'nl',
  messages
});

// Vue['i18n'] = i18n;

// export default boot(({ app }) => {
//   // Set i18n instance on app
//   app.i18n = i18n;
// });
