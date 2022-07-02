<template>
  <div class="row flex-center">
    <q-card
      flat
      :class="`section bg-${bgColor} full-height ${
        $q.screen.gt.xs && 'col-11'
      }`"
    >
      <water-mark-container
        class="full-width full-height q-pa-none q-my-none"
        :watermarks="WATERMARKS"
        :water-mark-height="WATERMARK_HEIGHT"
        :water-mark-width="WATERMARK_WIDTH"
      >
        <div class="row justify-between items-center q-pa-md">
          <q-item class="q-pa-none col-xs-12 col-sm-7 q-my-md">
            <q-item-section v-if="icon && $q.screen.gt.xs" avatar>
              <q-avatar :size="ICON_SIZE">
                <q-img :src="icon.filename" />
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label :class="`font-28 w-600 text-${textColor}`">
                {{ text }}
              </q-item-label>
            </q-item-section>
          </q-item>
          <simple-button
            class="col-xs-12 col-sm-auto q-pr-xl"
            :button-text="buttonText"
            :button-link="buttonLink"
            :button-color="buttonColor"
            :text-color="buttonTextColor"
            :emit="emit"
            :external="external"
            custom-class="c-minw-200 font-20 w-600"
          />
        </div>
      </water-mark-container>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { StoryblokImage } from '../../../../storyblook';
import SimpleButton from '../../global/SimpleButton.vue';

const ICON_SIZE = '72px';
const WATERMARKS = [
  {
    url: '/svg/downloadEBook-bg-element-botton-left.svg',
    customClass: 'bottom left no-repeat'
  },
  {
    url: '/svg/downloadEBook-bg-element-top-right.svg',
    customClass: 'top right no-repeat'
  }
];
const WATERMARK_WIDTH = '150';
const WATERMARK_HEIGHT = '150';

export default defineComponent({
  name: 'DownloadEBook',
  components: { SimpleButton },
  props: {
    text: {
      type: String,
      required: true
    },
    icon: (Object as unknown) as PropType<StoryblokImage>,
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
    bgColor: {
      type: String,
      default: 'purple'
    },
    textColor: {
      type: String,
      default: 'white'
    },
    buttonColor: {
      type: String,
      default: 'white'
    },
    buttonTextColor: {
      type: String,
      default: 'purple'
    }
  },
  data() {
    return { ICON_SIZE, WATERMARKS, WATERMARK_WIDTH, WATERMARK_HEIGHT };
  }
});
</script>
