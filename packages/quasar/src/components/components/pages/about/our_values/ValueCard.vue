<template>
  <div>
    <q-card flat bordered class="column full-height q-pb-none">
      <q-card-section class="col-4 q-mt-md">
        <div class="q-mt-md">
          <div class="row justify-center">
            <q-img :src="image" class="flex-width-75" />
          </div>
        </div>
      </q-card-section>

      <q-card-section class="col-1 font-18 w-600 text-center">
        {{ title }}
      </q-card-section>

      <q-card-section class="col text-center self-center font-18 w-400">
        {{ text }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ValueCard',
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
});
</script>
