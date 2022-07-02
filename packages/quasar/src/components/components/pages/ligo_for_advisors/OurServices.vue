<template>
  <section-component class="flex-center">
    <h2 class="text-center w-600 text-grey-14 q-pa-none justify-center">
      {{ title }}
    </h2>
    <div class="w-400 font-20 text-grey-5 text-center q-mb-md">
      {{ subtitle }}
    </div>
    <div v-for="(card, i) in cards" :key="i">
      <card-with-image
        class="q-mb-md"
        :title="card.title"
        :subtitle="card.subtitle"
        :image="card.image"
        :image-on-the-left="i % 2 == 0"
      />
    </div>
  </section-component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CardWithImageObj } from '../../../models/ligo_for_advisors/card_with_image';

import SectionComponent from '../../global/Section.vue';
import CardWithImage from './CardWithImage.vue';

export default defineComponent({
  name: 'OurServices',
  components: { CardWithImage, SectionComponent },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    cards: {
      type: (Array as unknown) as PropType<CardWithImageObj[]>,
      required: true
    }
  }
});
</script>
