<template>
  <section-component>
    <div class="row flex-center">
      <q-card
        round
        :class="`text-white q-py-lg row flex-center border-radius-20 overflow-hidden bg-${BG_COLOR} q-px-md
        ${$q.screen.width > 1599 ? 'col-9 col-xl-8' : 'col-sm-10'}`"
      >
        <div :class="`text-center best-price-tag w-500 bg-${BEST_PRICE_COLOR}`">
          {{ tagText }}
        </div>

        <span class="col-10 font-34 w-600 text-center q-mb-md">
          <span v-text="titleLeft" />
          <span class="text-primary" v-text="titleRight" />
        </span>
        <div class="col-12 row items-start justify-center">
          <membership-subsection
            :class="{
              'col-12 col-sm-6 q-mb-lg ': true,
              'q-pl-xl q-pr-md': $q.screen.gt.xs
            }"
            v-bind="leftSection[0]"
          />
          <membership-subsection
            :class="{
              'col-12 col-sm-6 q-mb-md ': true,
              'q-pl-xl q-pr-md': $q.screen.gt.xs
            }"
            v-bind="rightSection[0]"
          />
        </div>
        <simple-button
          class="q-mt-md"
          :button-text="buttonText"
          :button-link="buttonLink"
          :button-color="BUTTON_COLOR"
          :emit="false"
          :external="external"
          :custom-class="BUTTON_CUSTOM_CLASS"
          :dense="false"
        />
      </q-card>

      <span
        v-if="footerText"
        :class="`col-12 q-mt-md font-12 w-400 text-center text-${BG_COLOR}`"
        v-text="footerText"
      />
    </div>
  </section-component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { MembershipSection } from '../../../models/global-types/global-types';

import SectionComponent from '../Section.vue';
import MembershipSubsection from './MembershipSubsection.vue';
import SimpleButton from '../../../components/global/SimpleButton.vue';

const BUTTON_COLOR = 'primary';
const BEST_PRICE_COLOR = 'primary';
const BUTTON_CUSTOM_CLASS = 'c-minw-150 font-19 w-600';
const BG_COLOR = 'dark';

export default defineComponent({
  name: 'MembershipSection',
  components: {
    SectionComponent,
    MembershipSubsection,
    SimpleButton
  },
  props: {
    titleLeft: {
      type: String,
      required: true
    },
    titleRight: {
      type: String,
      required: true
    },
    leftSection: {
      type: Array as PropType<MembershipSection[]>,
      required: true
    },
    rightSection: {
      type: Array as PropType<MembershipSection[]>,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    },
    buttonLink: {
      type: String,
      required: true
    },
    external: {
      type: Boolean,
      default: false
    },
    tagText: {
      type: String,
      required: true
    },
    footerText: String
  },
  data() {
    return {
      BUTTON_COLOR,
      BEST_PRICE_COLOR,
      BUTTON_CUSTOM_CLASS,
      BG_COLOR
    };
  }
});
</script>
