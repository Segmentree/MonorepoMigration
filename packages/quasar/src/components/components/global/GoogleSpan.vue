<template>
  <span class="q-pa-none" :class="customClass">
    <span
      v-for="(char, i) in GOOGLE"
      :key="i"
      :class="GOOGLE[i].class"
      v-text="GOOGLE[i].text"
    />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const GOOGLE = [
  { text: 'G', class: 'text-blue' },
  { text: 'o', class: 'text-red' },
  { text: 'o', class: 'text-yellow' },
  { text: 'g', class: 'text-blue' },
  { text: 'l', class: 'text-green' },
  { text: 'e', class: 'text-red' }
];

export default defineComponent({
  name: 'GoogleSpan',
  props: {
    customClass: {
      type: String,
      default: 'font-18 w-400'
    }
  },
  setup() {
    return { GOOGLE };
  }
});
</script>
