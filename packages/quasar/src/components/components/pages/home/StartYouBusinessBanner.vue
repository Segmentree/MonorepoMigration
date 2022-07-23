<template>
  <q-card flat class="bg-purple full-width full-height">
    <water-mark-container
      class="full-width full-height q-pa-none q-my-none"
      :watermarks="WATERMARKS"
      water-mark-height="250"
      water-mark-width="250"
    >
      <div
        :class="`row q-pa-xl text-white items-center justify-center ${
          $q.screen.gt.xs && 'q-pa-md'
        }`"
      >
        <div class="col-xs-12 col-sm-6">
          <div :class="`font-30 w-600 ${!$q.screen.xs && 'q-pr-md'}`">
            {{ title }}
          </div>
          <div
            :class="`row justify-start ${
              $q.screen.xs && 'absolute-bottom q-ml-xl q-my-sm'
            }`"
          >
            <simple-button
              class="col-sm-12 col-md-auto q-mb-sm q-mr-md"
              custom-class="c-minw-250 font-20 "
              :button-text="button1Text"
              :button-link="button1Link"
              :emit="button1Emit"
              :external="button1External"
              button-color="primary"
            />
            <simple-button
              class="col-sm-12 col-md-auto q-mb-md"
              custom-class="c-minw-250 font-20"
              :button-text="button2Text"
              :button-link="button2Link"
              :emit="button2Emit"
              :external="button2External"
              button-color="white"
              text-color="purple"
            />
          </div>
        </div>
        <div
          :class="`col-xs-12 col-sm-5 font-20 ${
            $q.screen.xs ? 'q-mb-xl q-pb-xl' : 'q-pl-lg'
          }`"
        >
          {{ subtitle }}
        </div>
      </div>
    </water-mark-container>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WaterMarkContainer from '../../base/WaterMarkContainer.vue';
import SimpleButton from '../../global/SimpleButton.vue';

const BIG_COTES = 'svg/big_cotes.svg';
const WATERMARKS = [
  {
    url: 'svg/banner_background_element_left.svg',
    customClass: 'bottom left no-repeat'
  },
  {
    url: 'svg/banner_background_element_right.svg',
    customClass: 'top right no-repeat'
  }
];

export default defineComponent({
  name: 'StartYouBusinessBanner',
  components: { WaterMarkContainer, SimpleButton },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },

    button1Text: {
      type: String,
      required: true
    },
    button1Link: {
      type: String,
      required: true
    },
    button1Emit: {
      type: Boolean,
      default: false
    },
    button1External: {
      type: Boolean,
      default: false
    },

    button2Text: {
      type: String,
      required: true
    },
    button2Link: {
      type: String,
      required: true
    },
    button2Emit: {
      type: Boolean,
      default: false
    },
    button2External: {
      type: Boolean,
      default: false
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
