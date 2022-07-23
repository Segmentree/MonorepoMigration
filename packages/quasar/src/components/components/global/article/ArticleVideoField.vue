<template>
  <basic-you-tube-video :video-url="url" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BasicYouTubeVideo from '../../base/BasicYouTubeVideo.vue';

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
