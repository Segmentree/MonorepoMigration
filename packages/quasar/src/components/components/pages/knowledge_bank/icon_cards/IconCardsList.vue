<template>
  <section-component>
    <div class="row">
      <span
        :class="{
          'col-12 font-28 w-600 text-grey-14 q-px-md ': true,
          'text-center': $q.screen.xs
        }"
        v-text="title"
      />

      <div class="col-12 row justify-center item-start">
        <icon-card
          v-for="(card, i) in cards"
          :key="`card-${i}`"
          class="col-sm-3 col-xs-6 q-pa-md"
          v-bind="card"
        />
      </div>
    </div>
  </section-component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { IconCardObject } from '../../../../models/knowledge_bank/icon-card-obj';

import SectionComponent from '../../../global/Section.vue';
import IconCard from './IconCard.vue';

export default defineComponent({
  name: 'IconCardsList',
  components: {
    IconCard,
    SectionComponent
  },
  props: {
    title: {
      type: String,
      required: true
    },
    cards: {
      type: Array as PropType<IconCardObject[]>,
      required: true
    }
  }
});
</script>
