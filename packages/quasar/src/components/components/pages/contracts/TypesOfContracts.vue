<template>
  <section-component class="bg-grey-6 q-py-xl">
    <div class="w-600 q-py-md">
      <h2>{{ title }}</h2>
    </div>
    <categories-viewer
      :items="cards"
      :categories="categories"
      cardComponentName="ContractsTypeCard"
    />
  </section-component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import CategoriesViewer from '../../global/categories_viewer/CategoriesViewer.handler.vue';
import SectionComponent from '../../global/Section.vue';
import { ContractType } from '../../../models';
export default defineComponent({
  name: 'TypesOfContracts',
  components: { CategoriesViewer, SectionComponent },
  props: {
    title: String,
    categories: (Array as unknown) as PropType<string[]>,
    cards: (Array as unknown) as PropType<ContractType[]>
  }
});
</script>
