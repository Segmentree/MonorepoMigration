<template>
  <div>
    <a v-if="external" :href="link" target="_blank">
      <card-body v-bind="{ image, title }" />
    </a>
    <router-link v-else :to="link">
      <card-body v-bind="{ title, image }" />
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { StoryblokImage } from '../../../../../storyblook';

import CardBody from './CardBody.vue';

export default defineComponent({
  name: 'IconCard',
  components: { CardBody },

  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: Object as PropType<StoryblokImage>,
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
