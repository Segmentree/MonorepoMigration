<template>
  <section-component class="text-grey-14 font-14">
    <a v-if="external" :href="link">
      <q-icon name="mdi-arrow-left" class="q-mr-sm" />
      <span>{{ text }}</span>
    </a>
    <router-link v-else :to="link">
      <q-icon name="mdi-arrow-left" class="q-mr-sm" />
      <span>{{ text }}</span>
    </router-link>
  </section-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SectionComponent from '../Section.vue';

export default defineComponent({
  name: 'ArticleGoBackButton',
  components: {
    SectionComponent
  },
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    external: {
      type: Boolean,
      default: false
    }
  }
});
</script>
