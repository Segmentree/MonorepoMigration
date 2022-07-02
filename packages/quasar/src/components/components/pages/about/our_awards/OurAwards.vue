<template>
  <section-component>
    <div>
      <div class="text-center w-600 font-30 text-grey-14 q-mb-sm">
        {{ title }}
      </div>
      <div>
        <generic-carousel
          :items="awards"
          :autoplay="true"
          :interval="autoplayTime"
          :cyclic="true"
          :slides-per-screen="[3, 3, 3, 2]"
          :mobile-width-percent="STEPPER_MOBILE_WIDTH_PERCENT"
          :desktop-width-percent="STEPPER_DESKTOP_WIDTH_PERCENT"
        >
          <template #default="props">
            <award-card
              :image="props.item.val.image"
              :text="props.item.val.text"
            />
          </template>
        </generic-carousel>
      </div>
    </div>
  </section-component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { AwardCardObject } from '../../../../models/about/award-card';

import GenericCarousel from '../../../global/GenericCarousel.vue';
import SectionComponent from '../../../global/Section.vue';
import AwardCard from './AwardCard.vue';

const STEPPER_MOBILE_WIDTH_PERCENT = 100;
const STEPPER_DESKTOP_WIDTH_PERCENT = 60;

export default defineComponent({
  name: 'OurAwards',
  components: { GenericCarousel, AwardCard, SectionComponent },
  props: {
    title: {
      type: String,
      required: true
    },
    awards: {
      type: (Array as unknown) as PropType<AwardCardObject>,
      required: true
    },
    autoplayInterval: { type: String, default: '5' }
  },
  setup(props) {
    const autoplayTime = parseInt(props.autoplayInterval);

    return {
      autoplayTime,
      STEPPER_MOBILE_WIDTH_PERCENT,
      STEPPER_DESKTOP_WIDTH_PERCENT
    };
  }
});
</script>
