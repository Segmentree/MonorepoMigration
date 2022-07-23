<template>
  <div>
    <div class="section row justify-center">
      <div class="col-12 col-md-11 col-lg-10 row justify-center">
        <div class="col-12 row justify-center items-center">
          <div
            :class="`col-11 col-md-9 row items-center ${
              $q.screen.lt.md ? 'text-left' : 'justify-center text-center'
            }`"
          >
            <div class="col-12 w-600 text-grey-14">
              <h2>{{ title }}</h2>
            </div>
            <div class="col-12 w-400 text-grey-14 q-my-sm">
              <div class="s2">{{ subtitle }}</div>
            </div>
          </div>
        </div>
        <div class="col-12 q-my-xl" v-if="$q.screen.gt.sm">
          <div class="row justify-center items-stretch">
            <div
              v-for="(card, i) in cards"
              :key="i"
              :class="`col-6 q-p${i % 2 == 0 ? 'r-sm' : 'l-sm'}`"
              style="display: table-cell"
            >
              <ranking-card
                class="full-height"
                :title="card.title"
                :text="card.text"
                :icon="card.icon.filename"
                :ranking="card.ranking"
              />
            </div>
          </div>
        </div>
        <div class="col-12" v-if="$q.screen.lt.md">
          <cards-carousel :length="cards.length">
            <template v-for="(card, i) in cards" v-slot:[`slide-${i+1}`]>
              <!--eslint-disable-next-line vue/require-v-for-key-->
              <div class="full-height">
                <ranking-card
                  class="full-height"
                  :title="card.title"
                  :text="card.text"
                  :icon="card.icon"
                  :ranking="card.ranking"
                />
              </div>
            </template>
          </cards-carousel>
        </div>
        <rating-banner
          :score="Number(ranking_score)"
          :via="'kiyoh'"
          :reviews="Number(ranking_reviews)"
          :color="`dark`"
          :default_clases="false"
          :show-score="true"
          text_color="white"
          v-if="ranking_banner"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { RankingCards } from '../../models';

export default defineComponent({
  name: 'CustomerOpinion',
  props: {
    title: { type: String },
    subtitle: { type: String },
    cards: { type: (Array as unknown) as PropType<RankingCards[]> },
    ranking_banner: { type: Boolean },
    ranking_reviews: { type: String, default: '190' },
    ranking_score: { type: String, default: '8.4' },
  },
  setup() {
    return {};
  }
});
</script>
