<template>
  <div
    class="row justify-center"
    :style="`margin-top: ${margin_top}px; margin-bottom: ${margin_bottom}px`"
  >
    <div :class="`col-${$q.screen.lt.sm ? '11' : '10'} row justify-center`">
      <q-img
        :src="$q.screen.lt.md ? bannerMobile : bannerSrc"
        :class="`${$q.screen.lt.md ? 'flex-width-400' : ''}`"
        style="max-width: 1200px"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LogosBanner',
  components: {},
  props: {
    bannerSrc: {
      type: String,
      required: true,
    },
    bannerMobile: {
      type: String,
      required: true,
    },
    margin_top: {
      type: Number,
      default: 100
    },
    margin_bottom: {
      type: Number,
      default: 100
    }
  },
  setup(props) {
    return { props };
  }
});
</script>
