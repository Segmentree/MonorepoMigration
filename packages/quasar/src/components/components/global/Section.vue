<template>
  <div
    :class="`row justify-center ${marginTop && 'section'} ${
      marginBottom && 'section-bottom-margin'
    }`"
  >
    <div :class="`col-11 col-${compact ? 'md-10' : 'lg-10'}`">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'SectionComponent',
  props: {
    marginTop: {
      type: Boolean,
      default: true
    },
    marginBottom: {
      type: Boolean,
      default: false
    },
    compact: {
      type: Boolean,
      default: false
    }
  }
});
</script>
