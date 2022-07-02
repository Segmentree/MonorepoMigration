<template>
  <div class="q-py-md row justify-left">
    <div :class="`col-12 col-sm-${size}`">
      <q-img class="full-width border-radius-10" :src="img.filename" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { StoryblokImage } from '../../../../storyblook';

export default defineComponent({
  name: 'ArticleImageField',
  props: {
    img: Object as PropType<StoryblokImage>,
    size: {
      type: String,
      default: '12'
    }
  }
});
</script>
