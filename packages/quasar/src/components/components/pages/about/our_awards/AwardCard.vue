<template>
  <div class="row flex-center">
    <q-img class="col-12" :src="image.filename" />
    <span class="col-xs-10 col-sm-7 w-400 text-dark font-18 text-center">
      {{ text }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { StoryblokImage } from '@ligo/shared/storyblok';

export default defineComponent({
  name: 'AwardCard',
  props: {
    text: {
      type: String,
      required: true
    },
    image: {
      type: (Object as unknown) as PropType<StoryblokImage>,
      required: true
    }
  }
});
</script>
