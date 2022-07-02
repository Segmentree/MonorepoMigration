<template>
  <div class="section row justify-center">
    <div class="col-12 col-md-11 col-lg-10 col-xl-8 row justify-center">
      <div
        :class="`col-12 row justify-center items-center ${
          !information && 'q-mb-lg'
        }`"
      >
        <div
          :class="`col-11 col-md-9 row items-center ${
            $q.screen.lt.md ? 'text-left' : 'justify-center text-center'
          }`"
        >
          <div class="col-12 w-600 text-grey-14">
            <h2>{{ title }}</h2>
          </div>
          <div class="col-12 w-400 text-grey-14 q-my-sm">
            <subtitle :text="subtitle" />
          </div>
        </div>
      </div>
      <div
        v-if="information"
        class="col-12 row justify-center items-center q-mt-md q-mb-sm"
      >
        <div
          :class="`col-11 col-md-9 row items-center ${
            $q.screen.lt.md ? 'text-left' : 'justify-center text-center'
          }`"
        >
          <div class="col-12 t1 w-400 text-purple q-my-md">
            {{ information }}
          </div>
        </div>
      </div>
      <div :class="`col-12 col-sm-11 col-md-12 row justify-center`">
        <div
          v-for="(card, i) in cards"
          :key="`card-${i}`"
          :class="`col-12 col-sm-9 col-md-4 col-lg-4 ${
            $q.screen.gt.md ? 'full-height ' : ''
          } ${
            i < cards.length - 1 && $q.screen.gt.md
              ? 'q-pr-md'
              : $q.screen.gt.md
              ? ''
              : 'q-pa-sm'
          }`"
          style="display: table-cell"
        >
          <membership-card
            :type="card.type"
            :price="card.price"
            :highlight_price="card.highlight_price"
            :days="card.incorporations_days"
            :complete="card.complete"
            :items="cards[i].items"
            :btn="card.btn"
            :old_price="card.old_price"
            :discount="card.discount"
            :custom-link="card.customLink"
            :post="card.post"
          />
        </div>
      </div>
      <div class="col-12 col-sm-11">
        <q-separator class="full-width q-my-md" size="1.2px" />
      </div>
      <template v-if="page_foot || page_foot_2">
        <div class="col-12 text-center row justify-center t3 w-400 q-px-sm">
          {{ page_foot }}
        </div>
        <div class="col-12 text-center row justify-center t3 w-400 q-px-sm">
          {{ page_foot_2 }}
        </div>
      </template>
      <div
        v-for="pFoot in pageFeet"
        :key="pFoot._uid"
        class="col-12 text-center row justify-center t3 w-400 q-px-sm"
      >
        {{ pFoot.text }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { MembershipCard, MembershipListFoot } from '../../models';
import Subtitle from '../global/Subtitle.vue';

export default defineComponent({
  name: 'MembershipList',
  components: {
    Subtitle
  },
  props: {
    title: { type: String },
    subtitle: { type: String },
    page_foot: { type: String },
    page_foot_2: { type: String },
    pageFeet: { type: Array as PropType<MembershipListFoot[]> },
    information: { type: String },
    page_second_foot: { type: String },
    cards: { type: (Array as unknown) as PropType<MembershipCard[]> }
  }
});
</script>
