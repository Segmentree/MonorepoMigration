<template>
  <div :style="`margin-top: ${size}px`" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Margin',
  props: {
    size: {
      type: String,
      default: '90'
    }
  }
});
</script>
