<template>
  <section-component :margin-bottom="marginBottom">
    <div class="row flex-center">
      <q-img
        :class="`col-xs-12 col-sm-5 ${$q.screen.xs && 'q-mb-md'}`"
        :src="image.filename"
      />
      <div
        :class="{
          'row col-xs-12 col-sm-5 text-grey-14': true,
          'q-pl-xl': $q.screen.gt.xs
        }"
      >
        <span class="w-600 font-29 q-mb-sm" v-text="title" />
        <span class="w-400 font-18 q-mb-sm" v-text="subtitle" />
        <simple-button
          :button-color="buttonBgColor"
          :text-color="buttonTextColor"
          :button-text="buttonText"
          :button-link="buttonLink"
          :custom-class="buttonCustomClass"
          :external="external"
          :emit="emit"
        />
      </div>
    </div>
  </section-component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import SimpleButton from '../../global/SimpleButton.vue';
import SectionComponent from '../../global/Section.vue';
import { StoryblokImage } from '../../../../storyblook';

export default defineComponent({
  name: 'MoreAboutLigo',
  components: { SimpleButton, SectionComponent },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
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
    },
    marginBottom: {
      type: Boolean,
      default: true
    },
    buttonBgColor: {
      type: String,
      default: 'primary'
    },
    buttonTextColor: {
      type: String,
      default: 'white'
    },
    buttonCustomClass: {
      type: String,
      default: 'c-minw-150 w-600 font-20 text-center'
    }
  }
});
</script>
