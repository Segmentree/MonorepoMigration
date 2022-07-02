<template>
  <q-card flat class="q-pa-sm q-mx-none full-width q-my-sm">
    <q-card-section class="text-center font-29 w-600 q-pa-none justify-center">
      {{ title }}
    </q-card-section>

    <q-card-section class="row justify-center q-pa-none">
      <value-card
        v-for="(card, i) in cards"
        :key="i"
        :image="card.image.filename"
        :title="card.title"
        :text="card.text"
        class="col-sm col-xs-12 q-ma-sm"
      />
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ValueCardBlok } from '../../../../models/about/our-values';

import ValueCard from './ValueCard.vue';

export default defineComponent({
  name: 'OurValues',
  components: { ValueCard },
  props: {
    title: { type: String, default: 'asda' },
    cards: (Array as unknown) as PropType<ValueCardBlok[]>
  }
});
</script>
