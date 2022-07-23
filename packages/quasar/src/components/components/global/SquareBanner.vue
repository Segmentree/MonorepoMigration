<template>
  <div class="row full-width bg-purple-1">
    <div
      :class="`col-12 col-md-3 text-white q-py-lg ${
        $q.screen.lt.md ? 'q-px-xl' : 'q-mx-xl'
      } row justify-center items-center`"
    >
      <q-img class="square-banner-img" :src="img" />
    </div>
    <div
      :class="`
        col
        q-pb-${$q.screen.gt.sm ? 'xl' : 'lg'}
        q-pr-xl
        q-pt-${$q.screen.gt.sm && 'xl'}
        q-pl-${$q.screen.lt.md && 'xl'}`"
    >
      <div class="font-24 w-600">
        {{ text }}
      </div>
      <a :href="ctaUrl">
        <base-button
          filled
          unelevated
          :label="ctaLabel"
          classes="font-16 w-600 q-mt-md"
        />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from '../base/BaseButton.vue';

export default defineComponent({
  name: 'SquareBanner',
  components: { BaseButton },
  props: {
    ctaLabel: String,
    ctaUrl: String,
    img: String,
    text: String
  }
});
</script>
