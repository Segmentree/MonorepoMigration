<template>
  <section-component>
    <div class="row justify-center">
      <section-header class="full-width" :title="title" :subtitle="subtitle" />
      <div
        :class="`col-12 col-md-8 custom-border-radius three-steps-background row justify-center q-mt-${
          useImages && 'sm'
        }`"
      >
        <basic-you-tube-video
          v-if="!loading && !useImages"
          :video-url="videos[selectedMedia].text"
        />
        <q-card v-if="useImages" class="full-width">
          <img :src="images[selectedMedia].image.filename" />
        </q-card>
      </div>
      <div class="col-12 col-md-4 row">
        <div
          :class="`full-width ${$q.screen.gt.sm && 'q-pl-lg'}  ${
            $q.screen.lt.md && 'q-pt-md'
          }`"
        >
          <div
            v-for="(button, i) in buttons"
            :key="i"
            :class="`step-button-container ${
              i > 0 && $q.screen.gt.sm
                ? 'step-button-container-margin'
                : 'q-mt-sm'
            }`"
            @click="selectedMedia = i"
          >
            <step-button
              class="full-width"
              :title="button.title"
              :text="button.text"
              :icon="button.icon.filename"
              :size="button.size"
              :active="selectedMedia == i"
            />
          </div>
        </div>
      </div>
    </div>
  </section-component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import SectionComponent from '../../global/Section.vue';
import SectionHeader from '../../global/SectionHeader.vue';
import BasicYouTubeVideo from '../../base/BasicYouTubeVideo.vue';
import { StepButton, TextItem } from '../../../models';
import { StoryblokImage } from '../../../../storyblook';

export default defineComponent({
  name: 'ThreeSteps',
  components: { SectionComponent, SectionHeader, BasicYouTubeVideo },
  props: {
    title: { type: String },
    subtitle: { type: String },
    buttons: { type: (Array as unknown) as PropType<StepButton[]> },
    videos: { type: (Array as unknown) as PropType<TextItem[]> },
    images: (Array as unknown) as PropType<StoryblokImage[]>,
    useImages: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectedMedia: 0,
      loading: false
    };
  },
  watch: {
    selectedMedia() {
      this.loading = true;
      this.$nextTick(() => {
        this.loading = false;
      });
    }
  }
});
</script>
