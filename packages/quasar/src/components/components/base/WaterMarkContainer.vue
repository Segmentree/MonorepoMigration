<template>
  <div class="watermark-container" :style="style">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'WaterMarkContainer',
  props: {
    watermarks: {
      type: (Array as unknown) as PropType<any[]>,
      required: true
    },
    waterMarkWidth: {
      type: String,
      default: '200'
    },
    waterMarkHeight: {
      type: String,
      default: '100'
    }
  },
  setup(props) {
    let style = 'background: ';

    props.watermarks.forEach((watermark) => {
      style += 'url(' + watermark.url + ') ' + watermark.customClass + ' ,';
    });
    style = style.replace(/.$/, ';');
    style +=
      'background-size: ' +
      props.waterMarkWidth +
      'px ' +
      props.waterMarkHeight +
      'px;';

    return { style };
  }
});
</script>
