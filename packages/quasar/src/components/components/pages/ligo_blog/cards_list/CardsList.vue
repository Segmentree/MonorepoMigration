<template>
  <section-component>
    <div>
      <div
        v-if="title"
        :class="{
          'text-grey-14 w-600 font-30': true,
          'q-px-md': $q.screen.gt.xs || !carouselOnMobile,
          'text-center': centerTitle
        }"
      >
        {{ title }}
      </div>
      <div
        v-if="$q.screen.xs && carouselOnMobile"
        class="q-pa-none full-height"
      >
        <q-carousel
          v-model="slide"
          class="full-height text-white rounded-borders"
          transition-prev="slide-right"
          transition-next="slide-left"
          control-type="regular"
          control-color="white"
          control-text-color="black"
          swipeable
          animated
          arrows
          infinite
        >
          <q-carousel-slide
            v-for="(card, i) in cards"
            :key="i"
            class="q-pa-xs"
            :name="i"
          >
            <card-with-link
              :tag="card.tag"
              :title="card.title"
              :image="card.image"
              :link="card.link"
              :title-up="titlesUp"
            />
          </q-carousel-slide>
        </q-carousel>
      </div>

      <div
        v-else
        :class="`row justify-center ${titlesUp ? 'items-end' : 'items-start'}`"
      >
        <card-with-link
          v-for="(card, i) in cards"
          :key="i"
          :class="`q-pb-md col-${cardsCol} q-px-md`"
          v-bind="{
            ...card,
            titleUp: titlesUp
          }"
        />
      </div>
    </div>
  </section-component>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue';
import { CardWithImageObj } from '../../../../models/ligo_blog/home/card-with-link';

import { getNumberOfCols } from './cards-list.hook';

import CardWithLink from './CardWithLink.vue';
import SectionComponent from '../../../global/Section.vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'CardsList',
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
      type: Array as PropType<CardWithImageObj[]>,
      required: true
    },

    // Should the card tag and title be displted on top or bottom of the card
    titlesUp: {
      type: Boolean,
      default: false
    },

    // use carousel on mobile devices
    carouselOnMobile: {
      type: Boolean,
      default: false
    },

    cardsPerRowOnDesktop: {
      type: String,
      default: '3'
    },

    cardsPerRowOnMobile: {
      type: String,
      default: '2'
    },

    centerTitle: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const $q = useQuasar()
    const slide = ref(1);

    const cardsCol = computed(() => {
      let desktop = getNumberOfCols(props.cardsPerRowOnDesktop);
      let mobile = getNumberOfCols(props.cardsPerRowOnMobile);
      return $q.screen.xs ? mobile : desktop;
    });

    return {
      cardsCol,
      slide
    };
  }
});
</script>
