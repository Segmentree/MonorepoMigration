<template>
  <div class="row full-width q-py-lg q-px-lg justify-center bg-purple-1">
    <div v-if="$q.screen.gt.xs" class="col-4 q-pa-xl q-mr-md">
      <q-img :src="image.filename" />
    </div>
    <div :class="`col${$q.screen.gt.xs && '-6 q-mt-lg'}`">
      <div class="text-grey-14 w-600 font-30">
        {{ title }}
      </div>
      <div class="text-grey-14 font-18 q-mb-lg" style="white-space: pre-wrap">
        {{ body }}
      </div>
      <simple-button
        :button-text="buttonText"
        :button-link="buttonLink"
        :emit="emit"
        :external="external"
        button-color="primary"
        custom-class="c-minw-250 font-18 w-600"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { StoryblokImage } from '../../../../storyblook';

import SimpleButton from '../../global/SimpleButton.vue';

export default defineComponent({
  name: 'JoinOurTeam',
  components: { SimpleButton },
  props: {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    image: {
      type: (Object as unknown) as PropType<StoryblokImage>,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    },
    buttonLink: {
      type: String,
      required: true
    },
    emit: {
      type: Boolean,
      default: false
    },
    external: {
      type: Boolean,
      default: false
    }
  }
});
</script>
