<template>
  <div id="q-app" class="w-500">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent, watch } from 'vue';
import { useEnvironment } from '../../../netlify_functions';
// import { initIntercom, Intercom } from '@ligo/shared/utils';

export default defineComponent({
  name: 'App',
  setup() {
    // document.documentElement.setAttribute('lang', root.$i18n.locale);
    // watch(
    //   () => root.$i18n.locale,
    //   (newVal) => {
    //     document.documentElement.setAttribute('lang', newVal);
    //   }
    // );
    // initIntercom(useEnvironment().INTERCOM_KEY);
    // Intercom.identifyUser(null);
    // Intercom.update();
    return {};
  }
});
</script>
