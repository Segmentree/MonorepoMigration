<template>
  <q-toolbar v-if="visible" :class="' q-pa-none  bg-' + color">
    <water-mark-container
      :watermarks="WATERMARKS"
      :water-mark-height="WATERMARK_HEIGHT"
      :water-mark-width="WATERMARK_WIDTH"
      :class="`full-width full-height q-pa-none q-my-none q-pb-xs ${
        $q.screen.gt.xs && 'q-pt-md'
      }`"
    >
      <div class="row justify-end">
        <q-btn
          flat
          rounded
          :class="$q.screen.lt.sm ? '' : 'close-btn'"
          icon="close"
          color="secondary"
          @click="visible = false"
        />
      </div>

      <div
        :class="`row items-center q-px-sm ${
          !$q.screen.lt.sm && 'justify-center'
        }`"
      >
        <q-item :class="` q-pa-none  ${!$q.screen.lt.sm && 'col-8'}`">
          <q-item-section avatar>
            <q-avatar :size="ICON_SIZE">
              <q-img :src="icon.filename" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="w-600 text-secondary font-22">
              {{ title }}
            </q-item-label>

            <div
              v-if="!$q.screen.lt.sm"
              caption
              class="full-width row no-wrap items-start"
            >
              <q-rating
                v-model="score"
                class="col-auto rating-banner q-mt-sm"
                disable
                :icon="STAR_ICON"
              />
              <div class="row font-18 w-400 q-ml-sm q-mt-xs text-secondary">
                <p class="q-mr-sm font-interline">
                  {{ subtitle }}
                  <google-span class="q-ml-none q-pl-none font-interline" />
                </p>
              </div>
            </div>
          </q-item-section>
        </q-item>
        <div
          v-if="$q.screen.lt.sm"
          caption
          class="full-width row no-wrap items-start"
        >
          <q-rating
            v-model="score"
            class="col-auto rating-banner q-mt-sm"
            disable
            :icon="STAR_ICON"
          />
          <div class="row font-18 w-400 q-ml-sm q-mt-xs text-secondary">
            <p class="q-mr-sm font-interline">
              {{ subtitle }}
              <google-span class="q-ml-none q-pl-none font-interline" />
            </p>
          </div>
        </div>

        <simple-button
          class="q-mb-xs full-height justify-center q-ml-sm"
          custom-class="font-16 w-600 c-miw-100"
          :button-text="buttonText"
          :button-link="buttonLink"
          :button-color="buttonColor"
          :emit="emit"
          :external="external"
        />
      </div>
    </water-mark-container>
  </q-toolbar>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { BlokImage } from '../../models';

import WaterMarkContainer from '../base/WaterMarkContainer.vue';
import GoogleSpan from './GoogleSpan.vue';
import SimpleButton from './SimpleButton.vue';

const WATERMARK_WIDTH = '200';
const WATERMARK_HEIGHT = '100';
const ICON_SIZE = '72px';
const STAR_ICON = 'img:/svg/star.svg';
const WATERMARKS = [
  {
    url: 'svg/banner_background_element_right.svg',
    customClass: 'top right no-repeat'
  },
  {
    url: 'svg/banner_background_element_left.svg',
    customClass: 'bottom left no-repeat'
  }
];

export default defineComponent({
  name: 'UpgradeBanner',
  components: { WaterMarkContainer, GoogleSpan, SimpleButton },
  props: {
    title: {
      type: String,
      required: true
    },
    stars: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    icon: {
      type: Object as PropType<BlokImage>,
      required: true
    },
    color: {
      type: String,
      default: 'dark'
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
    },
    buttonColor: {
      type: String,
      default: 'primary'
    }
  },

  setup(props) {
    const visible = ref(true);

    return {
      score: parseInt(props.stars),
      visible,
      WATERMARKS,
      WATERMARK_WIDTH,
      WATERMARK_HEIGHT,
      ICON_SIZE,
      STAR_ICON
    };
  }
});
</script>
