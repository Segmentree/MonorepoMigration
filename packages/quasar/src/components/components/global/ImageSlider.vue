<template>
  <section-component>
    <generic-carousel
      :items="images"
      :cyclic="cyclic"
      :wrapper-before="wrapperBefore"
      :slides-per-screen="slidesPerScreen"
      :mobile-width-percent="STEPPER_MOBILE_WIDTH_PERCENT"
      :desktop-width-percent="STEPPER_DESKTOP_WIDTH_PERCENT"
    >
      <template #default="props">
        <div class="q-pa-xs">
          <q-img :src="props.item.val.image.filename" />
        </div>
      </template>
    </generic-carousel>
  </section-component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { BlokImage } from '../../models/global-types/global-types';

import GenericCarousel from './GenericCarousel.vue';
import SectionComponent from './Section.vue';

const STEPPER_MOBILE_WIDTH_PERCENT = 100;
const STEPPER_DESKTOP_WIDTH_PERCENT = 60;

export default defineComponent({
  name: 'ImageSlider',
  components: {
    GenericCarousel,
    SectionComponent
  },
  props: {
    images: (Array as unknown) as PropType<BlokImage[]>,
    cyclic: {
      type: Boolean,
      default: true
    },
    wrapperBefore: {
      type: Boolean,
      default: false
    },
    slidesPerScreen: {
      //This property indicates how many slides per screen we want to show
      //for each screen size
      //[lg, md, sm, xs] in that order
      type: (Array as unknown) as PropType<Array<number>>,
      default: () => [2, 2, 2, 1]
    }
  },

  data() {
    return {
      STEPPER_MOBILE_WIDTH_PERCENT,
      STEPPER_DESKTOP_WIDTH_PERCENT
    };
  }
});
</script>
