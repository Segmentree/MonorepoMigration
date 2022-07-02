<template>
  <div :class="textFormat">
    <subtitle
      class="w-600 full-width q-mt-sm"
      :text="text"
      :center-on-desktop="centerOnDesktop"
      :center-on-mobile="centerOnMobile"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Subtitle from '../../global/Subtitle.vue';

export default defineComponent({
  name: 'ArticleSubtitle',
  components: {
    Subtitle
  },
  props: {
    text: String,
    centerOnDesktop: {
      type: Boolean,
      default: false
    },
    centerOnMobile: {
      type: Boolean,
      default: false
    },
    textFormat: Array as PropType<string[]>
  }
});
</script>
