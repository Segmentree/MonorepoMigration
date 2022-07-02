<template>
  <div>
    <quotation-box
      :author="author"
      :icon="`img:${icon.filename}`"
      :quote="quote"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { StoryblokImage } from '../../../../storyblook';
import QuotationBox from '../QuotationBox.vue';

export default defineComponent({
  name: 'ArticleQuotationBox',
  components: { QuotationBox },
  props: {
    author: String,
    icon: Object as PropType<StoryblokImage>,
    quote: String
  }
});
</script>
