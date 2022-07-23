<template>
  <div name="meet-some-lawyers" class="text-white section row justify-center">
    <div class="col-11 col-md-10 row">
      <div class="col-12 row justify-center items-center">
        <div
          :class="`col-12 row items-center ${
            $q.screen.lt.md ? 'text-left' : 'justify-center text-center'
          }`"
        >
          <div class="col-12 w-600 text-grey-14">
            <h2>{{ title }}</h2>
          </div>
          <div class="col-12 w-400 text-grey-14 q-mt-sm">
            <div class="s2">{{ subtitle }}</div>
          </div>
          <div
            v-if="subtitle_2"
            class="col-12 font-20 w-400 text-grey-14 q-mb-sm"
          >
            {{ subtitle_2 }}
          </div>
        </div>
      </div>
      <div class="col-12 q-mt-xl row justify-center items-center">
        <div
          :class="`col-12 col-sm-6 col-md-4 col-lg-3 q-pa-sm ${
            $q.screen.gt.sm ? 'full-height' : ''
          }`"
          v-for="(lawyer, i) in cards"
          :key="i"
          style="display: table-cell"
        >
          <lawyers-cards :lawyer="lawyer" />
        </div>
      </div>
    </div>
    <div
      v-if="showBanner"
      class="col-12 col-sm-10 row justify-center items-center"
    >
      <landing-section-banner
        v-if="banner && banner[0]"
        :icon="banner[0].icon"
        :text="banner[0].text"
        backgroundColor="#37CFB1"
        buttonBgColor="white"
        buttonFontColor="primary"
        :buttonText="banner[0].button[0].key"
        :buttonLink="banner[0].button[0].link"
        :external="banner[0].button[0].external"
        :post="banner[0].button[0].post"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { LawyerCard, SectionBanner } from '../../../../models';

export default defineComponent({
  name: 'MeetSomeOfTheSpecializedLawyers',
  props: {
    showBanner: {
      type: Boolean,
      default: true
    },
    title: String,
    subtitle: String,
    subtitle_2: String,
    cards: (Array as unknown) as PropType<LawyerCard[]>,
    banner: (Array as unknown) as PropType<SectionBanner[]>
  }
});
</script>
