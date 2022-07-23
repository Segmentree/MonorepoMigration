<template>
  <q-btn
    :outline="!active"
    no-caps
    color="purple"
    class="full-width font-20 step-button"
  >
    <div class="col-12 row justify-around items-center full-width">
      <div class="row justify-center">
        <q-icon :name="`img:${icon}`" :style="`font-size: ${size}`" />
      </div>
      <div class="col-9">
        <div :class="`t0 w-600 ${active ? 'text-white' : 'text-dark'}`">
          {{ title }}
        </div>
      </div>
      <div
        v-if="text"
        :class="`col-12 text-center t2 w-400 text-${
          active ? 'white' : 'grey-2'
        } q-my-sm`"
      >
        {{ text }}
      </div>
    </div>
  </q-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'StepButton',
  components: {},
  props: {
    title: {
      type: String
    },
    text: {
      type: String
    },
    icon: {
      type: String
    },
    active: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: '40px'
    }
  },
  setup() {
    return {};
  }
});
</script>
