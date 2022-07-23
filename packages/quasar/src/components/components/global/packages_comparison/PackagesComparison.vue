<template>
  <section-component>
    <section-header
      class="full-width"
      :title="title"
      :subtitle="subtitle"
      margin-bottom="lg"
      :center-title-on-desktop="true"
      :center-subtitle-on-desktop="true"
      :center-title-on-mobile="true"
      :center-subtitle-on-mobile="true"
    />
    <pricing-table :sections="sections" :headers="headers" />
  </section-component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { PricingTableSection, PricingTableHead } from '../../../models';
import PricingTable from '../pricing_table/PricingTable.handler.vue';
import SectionHeader from '../../global/SectionHeader.vue';
import SectionComponent from '../Section.vue';

const CENTER_ALL = true;

export default defineComponent({
  name: 'PackagesComparison',
  components: { PricingTable, SectionComponent, SectionHeader },
  props: {
    title: String,
    subtitle: String,
    sections: (Array as unknown) as PropType<PricingTableSection[]>,
    headers: (Array as unknown) as PropType<PricingTableHead[]>
  },
  data() {
    return { CENTER_ALL };
  }
});
</script>
