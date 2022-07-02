<template>
  <div class="q-py-md">
    <square-banner
      :cta-label="ctaLabel"
      :cta-url="ctaUrl"
      :img="img.filename"
      :text="text"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { StoryblokImage } from '../../../../storyblook';

export default defineComponent({
  name: 'ArticleSquareBanner',
  props: {
    ctaLabel: String,
    ctaUrl: String,
    img: Object as PropType<StoryblokImage>,
    text: String
  }
});
</script>
