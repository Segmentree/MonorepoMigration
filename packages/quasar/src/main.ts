import { createApp } from 'vue';
import { Quasar } from 'quasar';
import { StoryblokVue } from '@storyblok/vue';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';
// Import Quasar css
import 'quasar/dist/quasar.css';

import App from './App.vue';
import { router } from './router';
import { i18n } from './boot/i18n'
import { storyblokConfig } from './storyblook';

createApp(App)
  .use(Quasar, {
    plugins: {},
  })
  .use(router)
  .use(i18n)
  .use(StoryblokVue, storyblokConfig)
  .mount('#app');
