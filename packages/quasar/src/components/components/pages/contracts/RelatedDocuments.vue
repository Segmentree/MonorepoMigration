<template>
  <section-component>
    <section-header
      v-if="title || subtitle"
      :title="title"
      :subtitle="subtitle"
    />
    <categories-container
      cardComponentName="ContractsTypeCard"
      :viewAll="viewAll"
      :viewAllText="viewAllText"
      :items="getList"
      @viewAllItems="viewAll = !viewAll"
    />
  </section-component>
</template>

<script lang="ts">
import { defineComponent, computed, PropType, ref } from 'vue';
import CategoriesContainer from '../../global/categories_viewer/CategoriesContainer.vue';
import SectionComponent from '../../global/Section.vue';
import SectionHeader from '../../global/SectionHeader.vue';

import { ContractType } from '../../../models';

const MAX = 5;

export default defineComponent({
  name: 'RelatedDocuments',
  components: { CategoriesContainer, SectionComponent, SectionHeader },
  props: {
    title: String,
    subtitle: String,
    viewAllText: String,
    cards: (Array as unknown) as PropType<ContractType[]>
  },
  setup(props) {
    const viewAll = ref(true);
    const getList = computed(() => {
      return !viewAll.value ? props.cards : props.cards.slice(0, MAX);
    });
    return { getList, viewAll };
  }
});
</script>
