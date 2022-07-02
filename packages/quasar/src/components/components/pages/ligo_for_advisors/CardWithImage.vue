<template>
  <div
    :class="`row full-width items-center justify-between q-pa-lg ${
      imageOnTheLeft && 'reverse'
    }`"
  >
    <div class="col-xs-12 col-sm-6">
      <q-img :src="image.filename" />
    </div>
    <div :class="`col-xs-12 col-sm-5 `">
      <div class="w-600 font-28 text-grey-14">
        {{ title }}
      </div>
      <div class="w-400 font-20 text-grey-5">
        {{ subtitle }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { StoryblokImage } from '../../../../storyblook';

export default defineComponent({
  name: 'CardWithImage',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    image: {
      type: Object as PropType<StoryblokImage>,
      required: true
    },
    imageOnTheLeft: {
      type: Boolean,
      default: false
    }
  }
});
</script>
