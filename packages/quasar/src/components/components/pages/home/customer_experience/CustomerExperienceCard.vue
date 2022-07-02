<template>
  <div>
    <q-card flat class="full-height q-pa-none">
      <q-card-section class="font-18 w-400 text-blue-14 q-pa-none">
        {{ industry }}
      </q-card-section>

      <q-card-section class="q-mt-none q-pa-none q-mb-md">
        <div class="justify-center">
          <a :href="link" target="_blank">
            <q-img :src="image" />
          </a>
        </div>
      </q-card-section>

      <q-card-section class="font-20 w-600 text-grey-14 q-ma-none q-pa-none">
        <a :href="link" target="_blank">
          {{ title }}
        </a>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'CustomerExperienceCard',
  props: {
    industry: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
});
</script>
