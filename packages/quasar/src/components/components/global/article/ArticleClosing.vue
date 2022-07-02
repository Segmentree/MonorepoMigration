<template>
  <section-component :margin-top="marginTop" :margin-bottom="marginBottom">
    <div class="full-width row justify-center items-center">
      <div class="col-12 col-md-10 col-lg-8 row items-center">
        <q-separator
          :size="SEPARATOR_SIZE"
          color="grey-11"
          class="q-mt-md q-mb-xl col-12"
        />
        <div class="col-2 col-sm-1">
          <q-img :src="authorPicture.filename" />
        </div>
        <div :class="`col q-pl-lg`">
          <div class="font-16 w-600">
            {{ authorName }}
            <span><q-icon :name="`img:${sideNameIcon.filename}`" /></span>
          </div>
          <div class="font-18 w-400 q-pt-lg">
            {{ text }}
          </div>
        </div>
        <q-separator
          :size="SEPARATOR_SIZE"
          color="grey-11"
          class="q-mb-md q-mt-xl col-12"
        />
      </div>
    </div>
  </section-component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { StoryblokImage } from '../../../../storyblook';

const SEPARATOR_SIZE = '2px';

export default defineComponent({
  name: 'ArticleClosing',
  props: {
    authorPicture: Object as PropType<StoryblokImage>,
    authorName: String,
    sideNameIcon: Object as PropType<StoryblokImage>,
    text: String,
    marginTop: Boolean,
    marginBottom: Boolean
  },
  data: function () {
    return {
      SEPARATOR_SIZE
    };
  }
});
</script>
