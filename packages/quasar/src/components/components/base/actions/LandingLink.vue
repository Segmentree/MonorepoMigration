<template>
  <app-link :to="urlByLocale(href, $i18n.locale)">
    <slot />
  </app-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { urlByLocale } from '../../../tools';

export default defineComponent({
  name: 'LandingLink',
  props: {
    href: {
      type: String,
      required: true
    }
  },
  setup() {
    return { urlByLocale };
  }
});
</script>
