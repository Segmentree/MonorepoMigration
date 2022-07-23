<template>
  <div class="section row justify-center">
    <div class="col-11 col-md-10">
      <div class="w-600 text-dark">
        <h2>{{ title }}</h2>
      </div>
      <div v-if="$q.screen.gt.xs">
        <awards-section
          v-for="(section, i) in sections"
          :key="i"
          :logo="section.logo.filename"
          :hover="section.hover.filename"
          :text="section.text"
        />
      </div>
    </div>
    <div v-if="$q.screen.lt.sm" class="full-width">
      <!-- <q-img src="../svg/awards_mobile.jpg" /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import AwardsSection from './AwardsSection.vue';
import { AwardSection } from '../../../../models';

export default defineComponent({
  name: 'AwardsNominationsAndPrices',
  components: { AwardsSection },
  props: {
    title: String,
    sections: (Array as unknown) as PropType<AwardSection[]>
  }
});
</script>
