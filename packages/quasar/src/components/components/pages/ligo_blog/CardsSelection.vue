<template>
  <section-component>
    <div class="row items-start justify-center">
      <span class="col-12 text-grey-14 w-600 font-30 q-px-md" v-text="title" />
      <card-with-link
        :class="{
          'col-12 col-sm-6 q-px-md': true,
          'q-mb-md': $q.screen.xs,
          'square ': $q.screen.gt.xs
        }"
        v-bind="{
          ...cards[0],
          titleUp: titlesUp,
          titleCustomClass: CUSTOM_TITLE_CLASS
        }"
      />

      <div class="col-12 col-sm-6 row">
        <card-with-link
          v-for="(card, i) in cards.slice(1)"
          :key="`card-${i}`"
          class="col-6 q-px-md q-pb-md square"
          v-bind="{ ...card, titleUp: titlesUp }"
        />
      </div>
    </div>
  </section-component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CardWithImageObj } from '../../../models/ligo_blog/home/card-with-link';

import CardWithLink from './cards_list/CardWithLink.vue';
import SectionComponent from '../../global/Section.vue';

const CUSTOM_TITLE_CLASS = 'text-grey-14 font-30 w-600';

export default defineComponent({
  name: 'CardsSelection',
  components: {
    CardWithLink,
    SectionComponent
  },
  props: {
    title: {
      type: String,
      required: true
    },
    cards: {
      type: (Array as unknown) as PropType<CardWithImageObj[]>,
      required: true
    },
    titlesUp: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return { CUSTOM_TITLE_CLASS };
  }
});
</script>
