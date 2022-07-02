<template>
  <div>
    <categories-selector
      :categories="categoriesList"
      :index="index"
      @update:index="index = $event"
    />
    <categories-container
      class="q-mt-lg"
      :cardComponentName="cardComponentName"
      :items="getCurrentList"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from 'vue';
import CategoriesContainer from './CategoriesContainer.vue';
import CategoriesSelector from './CategoriesSelector.vue';

import { CategoryItem } from '../../../models';

export default defineComponent({
  name: 'CategoriesViewer',
  components: { CategoriesContainer, CategoriesSelector },
  props: {
    categories: (Array as unknown) as PropType<
      { category: string; cards: CategoryItem[] }[]
    >,
    cardComponentName: String
  },
  setup(props) {
    const index = ref(0);
    const getCurrentList = computed(() => {
      return props.categories.find(
        (x) => x.category === categoriesList.value[index.value]
      ).cards;
    });
    const categoriesList = computed(() => {
      return props.categories.map((x) => x.category);
    });
    return { index, getCurrentList, categoriesList };
  }
});
</script>
