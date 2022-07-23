<template>
  <div class="q-py-md">
    <alert-banner
      :icon="`img:${icon.filename}`"
      :text="text"
      :apply-i18n="false"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { AlertBanner } from '@ligo/shared/components';
import { StoryblokImage } from '../../../../storyblook';

export default defineComponent({
  name: 'ArticleInformationBox',
  components: {
    AlertBanner
  },
  props: {
    icon: Object as PropType<StoryblokImage>,
    color: String,
    text: String
  }
});
</script>
