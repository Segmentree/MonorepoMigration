<template>
  <q-card class="step-card full-width font-20 q-mb-lg">
    <div class="row full-width q-pa-md">
      <div class="col-12 row q-mb-sm justify-center">
        <q-icon :name="`img:${icon}`" size="56px"/>
      </div>
      <div
        class="col-12 text-center w-600 t0 q-my-sm step-card-title"
        style="line-height: 120%"
      >
        {{ title }}
      </div>
      <div
        class="col-12 text-center t2 w-400 text-grey-2 q-my-sm step-card-text"
        style="line-height: 120%"
      >
        {{ text }}
      </div>
    </div>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'StepCard',
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
    }
  }
});
</script>
