<template>
  <div>
    <q-btn
      :color="bg"
      :text-color="!outline ? fontColor : bg"
      :class="`${fullWidth && 'full-width'} w-600 ${fontSize} ${minWidth}`"
      :label="text"
      :outline="outline"
      :type="type"
      unelevated
      no-caps
      @click="$emit('btn-click')"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseButton',
  components: {},
  props: {
    text: String,
    fontColor: {
      type: String,
      default: 'white'
    },
    bg: {
      type: String,
      required: true
    },
    outline: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: true
    },
    fontSize: {
      type: String,
      default: 't1'
    },
    minWidth: {
      type: String,
      default: 'c-minw-250'
    },
    type: {
      type: String,
      default: 'button'
    }
  }
});
</script>
