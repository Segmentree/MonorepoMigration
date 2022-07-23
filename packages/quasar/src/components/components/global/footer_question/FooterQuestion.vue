<template>
  <div class="section-padding section bg-grey-6 row">
    <section-header 
      class="full-width" 
      :title="title" 
      :subtitle="subtitle" 
      text-align="center"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SectionHeader from '../SectionHeader.vue';
export default defineComponent({
  name: 'FooterQuestion',
  components: {SectionHeader},
  props: {
    title: { type: String },
    subtitle: { type: String },
  }
});
</script>
