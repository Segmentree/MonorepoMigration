<template>
  <section-component>
    <div class="flex-center text-grey-2 font-16 w-600 text-center">
      {{ title }}
    </div>
    <div class="row items-center justify-between full-width q-px-lg">
      <div
        v-for="(advisorsImage, i) in advisorsImages"
        :key="i"
        :class="`col-xs-6 col-sm-2 q-px-lg ${$q.screen.xs && 'q-pb-lg'}`"
      >
        <q-img
          class="full-max-width full-max-height"
          :src="advisorsImage.image.filename"
        />
      </div>
    </div>
  </section-component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { StoryblokImage } from '../../../../storyblook';
import SectionComponent from '../../global/Section.vue';

export default defineComponent({
  name: 'OurAdvisors',
  components: {
    SectionComponent
  },
  props: {
    title: {
      type: String,
      required: true
    },
    advisorsImages: {
      type: (Array as unknown) as PropType<StoryblokImage[]>,
      required: true
    }
  }
});
</script>
