<template>
  <q-card flat class="bg-purple full-width full-height">
    <water-mark-container
      class="full-width full-height q-pa-none q-my-none"
      :watermarks="WATERMARKS"
      water-mark-height="250"
      water-mark-width="250"
    >
      <div :class="`row q-pa-xl items-center ${$q.screen.gt.xs && 'q-ma-xl'}`">
        <div :class="$q.screen.lt.sm ? 'col-12' : 'col-4 q-pr-xl'">
          <q-img :src="image.filename" />
        </div>
        <div class="col-xs-12 col-sm-8 text-white">
          <q-img :src="BIG_COTES" class="flex-width-50" />
          <div class="font-22 w-600 q-mt-md q-mb-lg">
            {{ text }}
          </div>
          <div class="row items-center">
            <q-img
              fit
              class="flex-width-150 self-baseline"
              :src="logo.filename"
            />
            <q-separator vertical class="q-mx-sm" color="white" />
            <div class="font-20">
              {{ role }}
            </div>
          </div>
        </div>
      </div>
    </water-mark-container>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { WaterMarkContainer } from '@ligo/shared/components';
import { StoryblokImage } from '../../../../storyblook';

const BIG_COTES = '/svg/big_cotes.svg';
const WATERMARKS = [
  {
    url: '/svg/background_Element_testimonial_botton_left.svg',
    customClass: 'bottom left no-repeat'
  },
  {
    url: '/svg/background_Element_testimonial_top_right.svg',
    customClass: 'top right no-repeat'
  }
];

export default defineComponent({
  name: 'TestimonialBanner',
  components: { WaterMarkContainer },
  props: {
    image: {
      type: (Object as unknown) as PropType<StoryblokImage>,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    logo: {
      type: (Object as unknown) as PropType<StoryblokImage>,
      required: true
    },
    role: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      WATERMARKS,
      BIG_COTES
    };
  }
});
</script>
