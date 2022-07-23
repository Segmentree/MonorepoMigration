<template>
  <div class="team-carousel">
    <div v-if="cards && cards.length">
      <span v-if="subtitle != emptySubtitle" class="text-grey-7 font-18">
        {{ subtitle }}
      </span>
      <q-carousel
        v-model="slide"
        control-color="black"
        swipeable
        animated
        arrows
      >
        <q-carousel-slide
          v-for="(card, i) in cards"
          :key="i"
          class="q-pa-none"
          :name="i"
        >
          <team-card
            :color="card.color"
            :position="card.position"
            :text="card.text"
            :title="card.title"
            :subtitle="card.subtitle"
            :img="card.img.filename"
          />
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';
import TeamCard from './TeamCard.vue';
import { TeamCardsListComponent } from '../../../../models/about/a-few-people-from-the-team';

export default defineComponent({
  name: 'TeamCarousel',
  components: { TeamCard },
  props: {
    subtitle: {
      type: String,
      default: ''
    },
    cards: {
      type: (Array as unknown) as PropType<Array<TeamCardsListComponent>>
    },
    emptySubtitle: {
      type: String,
      default: '-'
    }
  },
  setup() {
    const slide = ref(1);
    return { slide };
  }
});
</script>
