<template>
  <section-component>
    <div class="row full-width q-pa-md">
      <div class="col-sm-4 col-xs-12 q-pa-md q-mr-xl">
        <q-img :src="image.filename" :alt="'once_upon_a_time'" />
      </div>
      <div class="col-sm col-xs-12 q-px-sm q-mt-lg">
        <div class="font-30 w-600 text-grey-14 q-px-md">
          {{ title }}
        </div>
        <div
          class="font-18 w-400 text-grey-14 q-mt-md q-px-md"
          style="white-space: pre-wrap"
        >
          {{ body }}
        </div>
      </div>
    </div>
  </section-component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { StoryblokImage } from '../../../../storyblook';
import SectionComponent from '../../global/Section.vue';

export default defineComponent({
  name: 'OnceUponATime',
  components: { SectionComponent },
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: Object as PropType<StoryblokImage>,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  }
});
</script>
