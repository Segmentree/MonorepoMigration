<template>
  <basic-you-tube-video :video-url="url" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { BasicYouTubeVideo } from '@ligo/shared/components';

export default defineComponent({
  name: 'ArticleVideoField',
  components: { BasicYouTubeVideo },
  props: {
    url: {
      type: String,
      required: true
    }
  }
});
</script>
