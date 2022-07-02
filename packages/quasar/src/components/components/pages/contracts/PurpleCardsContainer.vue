<template>
  <section-component>
    <section-header
      v-if="title || subtitle"
      :title="title"
      :subtitle="subtitle"
    />
    <div class="row">
      <div
        v-for="(card, i) in cards"
        :key="'card0-' + i"
        :class="`col-md-${cardsFlexWidth} q-pl-${
          i > 0 && $q.screen.gt.sm && 'md'
        } q-py-md`"
      >
        <purple-card-component
          class="full-height"
          :title="card.title"
          :text="card.text"
          :icon="(card.icon && card.icon.filename) || undefined"
        />
      </div>
    </div>
  </section-component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import PurpleCardComponent from '../../global/PurpleCard.vue';
import SectionComponent from '../../global/Section.vue';
import SectionHeader from '../../global/SectionHeader.vue';
import { PurpleCard } from '../../../models';

export default defineComponent({
  name: 'PurpleCardsContainer',
  components: { PurpleCardComponent, SectionComponent, SectionHeader },
  props: {
    title: String,
    subtitle: String,
    cards: (Array as unknown) as PropType<PurpleCard[]>,
    cardsPerRow: String
  },
  setup(props) {
    const mapFlex = {
      '1': '12',
      '2': '6',
      '3': '4'
    };
    const cardsFlexWidth = mapFlex[props.cardsPerRow] || '3';
    return { cardsFlexWidth };
  }
});
</script>
