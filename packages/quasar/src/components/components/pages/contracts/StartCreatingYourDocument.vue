<template>
  <section-component>
    <section-header :title="title" :subtitle="subtitle" />
    <div class="col-12 row justify-center">
      <div
        v-for="(card, i) in cards"
        :key="'card-' + i"
        :class="`col-12 col-sm-6 q-pl-${
          i > 0 && $q.screen.gt.xs && 'md'
        } q-py-md`"
      >
        <simple-membership-card
          class="full-height"
          :title="card.title"
          :subtitle="card.subtitle"
          :price="card.price"
          :foot-text="card.footText"
          :btn-text="card.btnText"
          :dark="card.dark"
          :badge="card.badge"
          :external="card.external"
          :post="card.post"
          :button-link="card.buttonLink"
        />
      </div>
    </div>
  </section-component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { SimpleMembership } from '../../../models';
import SectionComponent from '../../global/Section.vue';
import SectionHeader from '../../global/SectionHeader.vue';
import SimpleMembershipCard from '../../global/SimpleMembershipCard.vue';

export default defineComponent({
  name: 'StartCreatingYourDocument',
  components: { SimpleMembershipCard, SectionComponent, SectionHeader },
  props: {
    title: String,
    subtitle: String,
    cards: (Array as unknown) as PropType<SimpleMembership[]>
  }
});
</script>
