<template>
  <q-card flat bordered>
    <q-card-section>
      <q-item class="q-px-none">
        <q-item-section avatar>
          <q-avatar :size="avatarIconSize">
            <q-img :src="icon" />
          </q-avatar>
        </q-item-section>
        <q-separator vertical class="q-mr-sm" />
        <q-item-section>
          <q-item-label class="w-600 text-grey-14 font-22">
            {{ title }}
          </q-item-label>

          <q-item-label caption class="row items-center no-wrap">
            <q-avatar size="20px" class="q-mr-sm">
              <q-img :src="rankingPlataformIcon" />
            </q-avatar>
            <q-rating
              v-model="rank"
              class="review-rating no-wrap"
              disable
              color="yellow"
              :size="$q.screen.lt.sm ? smallIconSize : regularIconSize"
              :icon="'img:' + rankingPlataformStarIcon"
            />
            <label class="font-18 w-600 q-ml-sm">
              {{ fraction }}
            </label>
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-card-section>
    <q-card-section class="w-500 text-grey-5 font-24">
      {{ text }}
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

import { fractionToString } from '@ligo/shared/utils';

export default defineComponent({
  name: 'RankingCard',
  components: {},
  props: {
    icon: {
      type: String,
      default: '/svg/rating_avatar.svg'
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    ranking: {
      type: String,
      required: true
    },
    rankingBase: {
      type: String,
      default: '5'
    },
    stars: {
      type: String,
      default: '5'
    },
    rankingPlataformIcon: {
      type: String,
      default: '/svg/google_logo.svg'
    },
    rankingPlataformStarIcon: {
      type: String,
      default: '/svg/star.svg'
    }
  },
  setup(props, { emit }) {
    const avatarIconSize = '54px';
    const smallIconSize = '12px';
    const regularIconSize = '18px';

    const rank = computed({
      get: () => parseInt(props.stars),
      set: (val: number) => emit('set_ranking', val.toString())
    });

    const fraction = fractionToString(props.ranking, props.rankingBase);
    return { rank, fraction, smallIconSize, regularIconSize, avatarIconSize };
  }
});
</script>
