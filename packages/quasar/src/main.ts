import { createApp } from 'vue';
import { Quasar } from 'quasar';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';
// Import Quasar css
import 'quasar/dist/quasar.css';

import App from './App.vue';
import { router } from './router';

createApp(App)
  .use(Quasar, {
    plugins: {},
  })
  .use(router)
  .mount('#app');
