<template>
  <q-banner
    v-if="show"
    inline-actions
    class="bg-purple-3 q-pa-none"
    style="marging: 0px !important"
  >
    <div class="row justify-between q-ml-none">
      <q-img
        contain
        class="col-12 col-md-6 col-lg-4"
        src="../svg/welcome_banner.svg"
        color="primary"
      />
      <div :class="`col-12 col-md-6 col-lg-8 column justify-center ${$q.screen.lt.md && 'q-ml-md q-mt-md'}`">
        <p :class="`q-py-sm w-600 font-20`">{{ title }}</p>
        <p :class="`font-16 w-400`">
          {{ text }}
        </p>
      </div>
    </div>
    <template v-slot:action>
      <q-btn fab-mini @click="show = false" flat icon="close" />
    </template>
  </q-banner>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'WelcomeBanner',
  props: {
      title: {
          type: String
      },
      text: {
          type: String
      }
  },
  data: () => ({ show: true })
});
</script>
