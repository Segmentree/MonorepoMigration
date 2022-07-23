<template>
  <div class="row justify-center">
    <div class="col-11 col-md-10">
      <div
        name="why-customers-choose-ligo"
        class="text-white font-12 section-padding row justify-center"
      >
        <div class="col-12 col-xl-9">
          <div
            :class="`row ${
              $q.screen.lt.sm ? 'text-start' : 'justify-center text-center'
            } text-dark w-600`"
          >
            <h2>{{ title }}</h2>
          </div>
          <div :class="`row justify-center text-grey-5 q-py-md`">
            <subtitle class="col-12 col-sm-8" :text="subtitle" />
          </div>
          <div class="row justify-center">
            <div
              v-for="(card, i) in cards"
              :key="i"
              :class="`col-12 col-sm-6 col-md-4 ${
                $q.screen.lt.sm ? 'q-py-md' : 'q-pa-md'
              }`"
            >
              <purple-card-component
                :title="card.title"
                :text="card.text"
                :icon="(card.icon && card.icon.filename) || undefined"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import PurpleCardComponent from '../../../global/PurpleCard.vue';
import { PurpleCard } from '../../../../models';

import Subtitle from '../../../global/Subtitle.vue';

export default defineComponent({
  name: 'WhyCustomersChooseLigo',
  components: { PurpleCardComponent, Subtitle },
  props: {
    title: String,
    subtitle: String,
    cards: (Array as unknown) as PropType<PurpleCard[]>
  }
});
</script>
