<template>
  <section-component>
    <div class="justify-center q-pa-md">
      <div
        :class="`items-center ${
          $q.screen.lt.md ? 'text-left' : 'justify-center text-center'
        }`"
      >
        <div class="w-600 text-grey-14 font-30">
          {{ title }}
        </div>
        <subtitle class="w-400 text-grey-14 q-my-sm" :text="subtitle" />
      </div>
      <generic-carousel
        :v-if="showslider"
        :items="cards"
        :autoplay="autoplay"
        :interval="intervalmsNumber"
        :cyclic="cyclic"
        :mobile-width-percent="STEPPER_MOBILE_WIDTH_PERCENT"
        :desktop-width-percent="STEPPER_DESKTOP_WIDTH_PERCENT"
      >
        <template #default="props">
          <ranking-card
            class="q-mx-sm"
            :style="`${
              props.maxHeight && 'min-height:' + props.maxHeight + 'px;'
            }`"
            :title="props.item.val.title"
            :text="props.item.val.text"
            :icon="
              (props.item.val.icon && props.item.val.icon.filename) || undefined
            "
            :ranking="props.item.val.ranking"
            :ranking-base="props.item.val.rankingBase"
            :stars="props.item.val.stars"
            :ranking-plataform-icon="
              (props.item.val.rankingPlataformIcon &&
                props.item.val.rankingPlataformIcon.filename) ||
              undefined
            "
            :ranking-plataform-star-icon="
              (props.item.val.rankingPlataformStarIcon &&
                props.item.val.rankingPlataformStarIcon.filename) ||
              undefined
            "
          />
        </template>
      </generic-carousel>
      <div v-if="showbanner" class="col-12 row justify-center q-my-lg">
        <reviews-banner
          class="c-bradius-10"
          :reviews="reviewsToShow"
          :color="`dark`"
          :text-color="'white'"
        />
      </div>
    </div>
  </section-component>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';

import GenericCarousel from '../../../global/GenericCarousel.vue';
import RankingCard from '../../../global/ranking_card/RankingCard.vue';
import ReviewsBanner from '../../../base/ReviewsBanner.vue';
import SectionComponent from '../../../global/Section.vue';
import Subtitle from '../../../global/Subtitle.vue';

import { RankingCards } from '../../../../models';
import { ReviewRatingObject } from '../../../../models/review_section/review-section';
import { useQuasar } from 'quasar';

const STEPPER_MOBILE_WIDTH_PERCENT = 100;
const STEPPER_DESKTOP_WIDTH_PERCENT = 60;

export default defineComponent({
  name: 'WhatOurCustumersSay',
  components: {
    GenericCarousel,
    RankingCard,
    ReviewsBanner,
    SectionComponent,
    Subtitle
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },

    cards: (Array as unknown) as PropType<RankingCards[]>,
    reviewsList: (Array as unknown) as PropType<ReviewRatingObject[]>,

    autoplay: {
      type: Boolean,
      default: false
    },
    interval: {
      type: String,
      default: '5'
    },
    cyclic: {
      type: Boolean,
      default: true
    }
  },

  setup(props) {
    const $q = useQuasar()
    const intervalmsNumber =
      props.interval.toString() == '' ? 5 : parseInt(props.interval);

    const showslider = props.cards && props.cards.length > 0;

    const showbanner = props.reviewsList && props.reviewsList.length > 0;
    const reviewsToShow = computed(() => {
      return props.reviewsList &&
        props.reviewsList.length > 2 &&
        $q.screen.lt.sm
        ? [props.reviewsList[0], props.reviewsList[1]]
        : props.reviewsList;
    });

    return {
      showbanner,
      showslider,
      reviewsToShow,
      intervalmsNumber,
      STEPPER_MOBILE_WIDTH_PERCENT,
      STEPPER_DESKTOP_WIDTH_PERCENT
    };
  }
});
</script>
