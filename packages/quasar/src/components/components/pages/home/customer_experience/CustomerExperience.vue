<template>
  <section-component>
    <q-card flat class="q-pa-sm q-mx-none full-width q-my-sm">
      <q-card-section
        class="text-center w-600 text-grey-14 q-pa-none justify-center"
      >
        <h2>
          {{ title }}
        </h2>
      </q-card-section>

      <q-card-section class="row justify-center q-pa-none">
        <customer-exp-card
          v-for="(card, i) in cards"
          :key="i"
          :industry="card.industry"
          :image="card.image.filename"
          :title="card.title"
          :link="card.link"
          class="col-sm col-xs-12 q-ma-sm"
        />
      </q-card-section>
    </q-card>
  </section-component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CustomerCardBlok } from '../../../../models/home/customer-experience';
import SectionComponent from '../../../global/Section.vue';
import CustomerExpCard from './CustomerExperienceCard.vue';
export default defineComponent({
  name: 'CustomerExperience',

  components: { CustomerExpCard, SectionComponent },
  props: {
    title: String,
    cards: (Array as unknown) as PropType<CustomerCardBlok[]>
  }
});
</script>
