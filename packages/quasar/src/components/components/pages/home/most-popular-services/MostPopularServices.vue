<template>
  <div class="section row justify-center">
    <div class="col-11 col-md-10">
      <div name="why-customers-choose-ligo" class="row justify-center">
        <div class="col-12">
          <div
            :class="`q-mb-xl row ${
              $q.screen.lt.sm ? 'text-start' : 'justify-center text-center'
            } text-dark w-600`"
          >
            <h2>{{ title }}</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="col-11 col-md-10 col-xl-8 row justify-center">
      <div
        :class="`col-12 col-sm-6 col-md-4 ${
          $q.screen.gt.sm ? 'full-height' : ''
        } ${$q.screen.lt.sm ? 'q-py-md' : 'q-pa-sm'}`"
        v-for="(card, i) in cards"
        :key="i"
        style="display: table-cell"
      >
        <service-card
          :title="card.title"
          :icon="card.icon.filename"
          :price="card.price"
          :button="card.button[0]"
          :features="card.features"
          :popular="card.popular"
          :discount="card.discount"
        />
      </div>
    </div>
    <div
      v-if="showBanner"
      class="col-12 col-sm-11 col-md-10 q-mt-xl row justify-center items-center"
    >
      <landing-section-banner
        :icon="bannerIcon"
        class="text-white"
        :text="bannerText"
        backgroundColor="#3F50F2"
        fontColor="white"
        buttonBgColor="white"
        buttonFontColor="purple-2"
        :buttonText="bannerBtn"
        :buttonLink="bannerBtnLink"
        :external="externalLink"
        :post="post"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ServiceCard } from '../../../../models/home/most-popular-services';

export default defineComponent({
  name: 'MostPopularServices',
  props: {
    title: String,
    cards: (Array as unknown) as PropType<ServiceCard[]>,
    bannerText: String,
    bannerBtn: String,
    bannerBtnLink: String,
    post: {
      type: Boolean,
      default: false
    },
    externalLink: {
      type: Boolean,
      default: false
    },
    bannerIcon: (Object as unknown) as PropType<{ filename: string }>,
    showBanner: Boolean
  }
});
</script>
