<template>
  <a :href="link" :target="openInNewTab && '_blank'">
    <q-card flat class="full-height q-pa-none">
      <q-img
        v-if="image.filename && !titleUp"
        :src="image.filename"
        class="q-my-xs"
      />

      <q-card-section class="q-pa-none">
        <div :class="'q-pa-none q-my-xs ' + tagCustomClass">
          {{ tag }}
        </div>
        <div :class="'q-pa-none q-my-xs text-break ' + titleCustomClass">
          {{ title }}
        </div>
        <div
          v-if="subtitle"
          :class="'q-pa-none q-my-xs text-break ' + subtitleCustomClass"
        >
          {{ subtitle }}
        </div>
      </q-card-section>

      <q-img
        v-if="image.filename && titleUp"
        :src="image.filename"
        class="q-my-xs"
      />
    </q-card>
  </a>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { StoryblokImage } from '../../../../../storyblook';

export default defineComponent({
  name: 'CardWithLink',
  props: {
    tag: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: String,
    image: (Object as unknown) as PropType<StoryblokImage>,
    link: {
      type: String,
      requierd: true
    },
    titleUp: {
      type: Boolean,
      default: true
    },
    tagCustomClass: {
      type: String,
      default: 'text-blue-14 font-18 w-400'
    },
    titleCustomClass: {
      type: String,
      default: 'text-grey-14 font-20 w-600'
    },
    subtitleCustomClass: {
      type: String,
      default: 'text-grey-14 font-18 w-400'
    },
    openInNewTab: {
      type: Boolean,
      default: true
    }
  }
});
</script>
