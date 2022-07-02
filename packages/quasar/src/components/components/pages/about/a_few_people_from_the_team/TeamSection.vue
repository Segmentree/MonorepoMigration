<template>
  <div class="justify-center full-width">
    <span
      v-if="subtitle != emptySubtitle && cards.length"
      class="text-grey-7 font-18"
    >
      {{ subtitle }}
      <q-separator color="grey-7" />
    </span>

    <div class="row">
      <div
        v-for="(card, i) in cards"
        :key="i"
        class="col-12 col-sm-6 col-md-4 q-pa-sm"
      >
        <team-card
          :color="card.color"
          :position="card.position"
          :text="card.text"
          :title="card.title"
          :subtitle="card.subtitle"
          :img="card.img.filename"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { TeamCardsListComponent } from '../../../../models';

import TeamCard from './TeamCard.vue';

export default defineComponent({
  name: 'TeamSection',
  components: { TeamCard },
  props: {
    subtitle: {
      type: String,
      required: true
    },
    cards: {
      type: (Array as unknown) as PropType<TeamCardsListComponent[]>,
      required: true
    },
    emptySubtitle: {
      type: String,
      default: '-'
    }
  }
});
</script>
