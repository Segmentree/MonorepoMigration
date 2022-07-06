<template>
  <app-link :to="urlByLocale(href, locale)">
    <slot />
  </app-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
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
    const locale = useI18n().locale
    return { urlByLocale, locale };
  }
});
</script>
