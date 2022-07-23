<template>
  <div class="text-left">
    <div
      :class="{
        's2 ': true,
        'text-center':
          ($q.screen.xs && centerOnMobile) ||
          ($q.screen.gt.xs && centerOnDesktop)
      }"
    >
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Subtitle',
  props: {
    text: {
      type: String,
      required: true
    },
    centerOnDesktop: {
      type: Boolean,
      default: true
    },
    centerOnMobile: {
      type: Boolean,
      default: false
    }
  }
});
</script>
