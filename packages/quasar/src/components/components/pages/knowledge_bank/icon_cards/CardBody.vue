<template>
  <q-card flat bordered class="full-height q-px-sm q-py-md row justify-center">
    <div class="row col-12 flex-center">
      <q-img class="col-5" :src="image.filename" />
    </div>

    <span
      class="col-12 text-grey-14 w-600 font-16 text-center"
      v-text="title"
    />
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { StoryblokImage } from '../../../../../storyblook';

export default defineComponent({
  name: 'CardBody',
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: Object as PropType<StoryblokImage>,
      required: true
    }
  }
});
</script>
