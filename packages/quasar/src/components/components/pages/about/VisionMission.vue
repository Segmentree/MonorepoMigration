<template>
  <q-card flat class="bg-grey-14 full-width full-height text-white">
    <water-mark-container
      class="full-width full-height q-pa-none q-my-none"
      :watermarks="WATERMARKS"
      water-mark-height="250"
      water-mark-width="250"
    >
      <div :class="`q-pa-${notMobile ? 'xl' : 'lg'}`">
        <div
          :class="`justify-center items-start ${notMobile && 'row q-pa-xl'}`"
        >
          <div
            :class="`col-sm-5 col-xs-12 row ${
              notMobile ? 'q-pr-xl' : 'q-mb-lg'
            }`"
          >
            <span class="font-30 w-600 q-mb-sm" v-text="visionTitle" />
            <span class="font-18 w-400" v-text="visionBody" />
          </div>

          <q-separator :vertical="notMobile" color="white" />
          <div
            :class="`col-sm-5 col-xs-12 row ${
              notMobile ? 'q-pl-xl' : 'q-mt-lg'
            }`"
          >
            <span class="font-30 w-600 q-mb-sm" v-text="missionTitle" />
            <span class="font-18 w-400" v-text="missionBody" />
          </div>
        </div>
      </div>
    </water-mark-container>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

import WaterMarkContainer from '../../base/WaterMarkContainer.vue';
import { useQuasar } from 'quasar';

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
  name: 'VisionMission',
  components: { WaterMarkContainer },
  props: {
    visionTitle: {
      type: String,
      required: true
    },
    visionBody: {
      type: String,
      required: true
    },
    missionTitle: {
      type: String,
      required: true
    },

    missionBody: {
      type: String,
      required: true
    }
  },
  setup() {
    const $q = useQuasar()
    const notMobile = computed(() => {
      return $q.screen.gt.xs;
    });

    return {
      notMobile,
      WATERMARKS
    };
  }
});
</script>
