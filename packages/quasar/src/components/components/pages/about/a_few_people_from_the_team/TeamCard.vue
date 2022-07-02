<template>
  <q-card
    flat
    bordered
    class="team-card"
    @mouseleave="enable = !enable"
    @mouseenter="enable = !enable"
  >
    <div
      :class="`full-width team-background-${color}-${position} team-card-content`"
    >
      <div class="full-width row justify-center">
        <q-img id="card-image" :src="img" />
      </div>
      <div v-if="!enable">
        <div class="full-width full-height bg-white absolute-top opacity-8">
          <q-scroll-area :style="`height: ${imageHeight}px`">
            <div
              class="full-height q-px-lg q-pt-xl row justify-center font-16 text-grey-14"
            >
              {{ text }}
            </div>
          </q-scroll-area>
        </div>
      </div>
    </div>
    <q-card-section>
      <div class="w-600 font-18 text-grey-14">
        <h5>{{ title }}</h5>
      </div>
      <div class="t2 w-400 font-18 text-grey-5">
        {{ subtitle }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

import { runCallbackOnResize } from '@ligo/shared/utils';

export default defineComponent({
  name: 'TeamCard',
  components: {},
  props: {
    position: {
      type: String as PropType<'top-center' | 'bottom-left' | 'right'>,
      default: 'top-center'
    },
    color: {
      type: String as PropType<'purple' | 'green'>,
      default: 'purple'
    },
    text: {
      type: String
    },
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    img: {
      type: String
    }
  },
  setup() {
    const enable = ref(true);
    const imageHeight = ref(0);

    runCallbackOnResize('#card-image', (node) => {
      imageHeight.value = node.getBoundingClientRect().height;
    });

    return { enable, imageHeight };
  }
});
</script>
