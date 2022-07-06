<template>
  <div id="q-app" class="w-500">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent, watch } from 'vue';
import { useI18n } from 'vue-i18n';
// import { useEnvironment } from '../../../netlify_functions';
// import { initIntercom, Intercom } from '@ligo/shared/utils';

export default defineComponent({
  name: 'App',
  setup() {
    const i18n = useI18n();
    document.documentElement.setAttribute('lang', i18n.locale.value);
    watch(
      () => i18n.locale,
      (locale) => {
        document.documentElement.setAttribute('lang', locale.value);
      }
    );
    // initIntercom(useEnvironment().INTERCOM_KEY);
    // Intercom.identifyUser(null);
    // Intercom.update();
    return {};
  },
});
</script>
