<template>
  <div class="text-left">
    <div
      :class="{
        'text-center':
          ($q.screen.xs && centerOnMobile) ||
          ($q.screen.gt.xs && centerOnDesktop)
      }"
    >
      <h2>{{ text }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderTitle',
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
