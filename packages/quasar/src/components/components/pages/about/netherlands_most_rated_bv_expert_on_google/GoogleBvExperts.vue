<template>
  <section-component>
    <div class="row justify-center">
      <div
        :class="{
          'col-12 col-sm-6': true,
          'q-pr-xl': $q.screen.gt.xs,
          'q-mb-md': $q.screen.xs
        }"
      >
        <div class="text-dark w-600 q-mb-md">
          <h2>{{ title }}</h2>
        </div>
        <div class="w-400 text-grey-5 t2">
          {{ text }}
        </div>
      </div>
      <div class="col-12 col-sm-5">
        <basic-you-tube-video :video-url="video" :radius="RADIUS" />
      </div>
    </div>
  </section-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BasicYouTubeVideo from '../../../base/BasicYouTubeVideo.vue';
import SectionComponent from '../../../global/Section.vue';

const RADIUS = '90';

export default defineComponent({
  name: 'GoogleBvExperts',
  components: { BasicYouTubeVideo, SectionComponent },
  props: {
    title: String,
    text: String,
    video: String
  },
  data() {
    return { RADIUS };
  }
});
</script>
