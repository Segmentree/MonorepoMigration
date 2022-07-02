<template>
  <div>
    <a v-for="(link, i) in links" :key="'link-' + i" :href="link.text" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
export default defineComponent({
  name: 'StaticSitemap',
  props: {
    links: (Array as unknown) as PropType<string[]>
  }
});
</script>
