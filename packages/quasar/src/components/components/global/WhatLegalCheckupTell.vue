<template>
  <section-component>
    <div class="row q-mb-md">
      <div class="col-12 col-md-7 q-px-lg">
        <section-header
          :title="title"
          :subtitle="subtitle"
          text-align="left"
          dense
        />
        <list-with-icons
          v-if="list && list[0]"
          :defaultIcon="list[0].icon"
          :items="list[0].items"
        />
      </div>
      <div class="col-12 col-md-5 q-px-lg">
        <div class="row">
          <div v-for="doc in docs" :key="doc._uid" class="col-6 q-px-lg">
            <q-img width="100%" :src="doc.image.filename" />
            <p class="text-center full-width t3 w-400">{{ doc.text }}</p>
          </div>
        </div>
        <div class="row q-px-lg">
          <nav-button
            class="full-width"
            :buttonText="mainButtonText"
            :buttonLink="mainButtonLink"
            buttonBgColor="primary"
            buttonFontColor="white"
            external
          />
        </div>
      </div>
    </div>
    <landing-section-banner v-bind="footerBanner[0]" />
  </section-component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ListWithIcons from '../base/ListWithIcons.vue';
import SectionComponent from './Section.vue';
import SectionHeader from './SectionHeader.vue';
import { BannerList, LegalCheckupDoc } from '../../models';
import LandingSectionBanner from '../base/LandingSectionBanner.vue';
import NavButton from '../base/NavButton.vue';
import { SectionBanner } from '../../models';

export default defineComponent({
  name: 'WhatLegalCheckupTell',
  components: {
    SectionComponent,
    SectionHeader,
    ListWithIcons,
    LandingSectionBanner,
    NavButton
  },
  props: {
    title: String,
    subtitle: String,
    mainButtonText: String,
    mainButtonLink: String,
    docs: (Array as unknown) as PropType<LegalCheckupDoc[]>,
    list: {
      type: (Array as unknown) as PropType<BannerList[]>
    },
    footerBanner: {
      type: (Array as unknown) as PropType<SectionBanner>
    }
  }
});
</script>
