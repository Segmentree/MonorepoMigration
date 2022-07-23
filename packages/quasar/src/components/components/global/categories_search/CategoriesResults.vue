<template>
  <div>
    <categories-container
      :cardComponentName="cardComponentName"
      :items="getList"
    />
    <div class="full-width row justify-center q-mt-xl">
      <q-pagination
        class="font-16"
        :value="current"
        @input="current = $event"
        direction-links
        :max="MAX"
        outline
        color="black"
        active-color="primary"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from 'vue';
import CategoriesContainer from '../categories_viewer/CategoriesContainer.vue';

import { CategoryItem } from '../../../models';

const SIZE = 9;

export default defineComponent({
  name: 'CategoriesResults',
  components: { CategoriesContainer },
  props: {
    cardComponentName: String,
    items: (Array as unknown) as PropType<CategoryItem[]>
  },
  setup(props) {
    const current = ref(1);

    const getList = computed(() => {
      const INIT = (current.value - 1) * SIZE;
      const END = Math.min(props.items.length, INIT + SIZE - 1);
      return props.items.slice(INIT, END + 1);
    });

    const MAX = computed(() => {
      return Math.ceil(props.items.length / SIZE);
    });

    return { current, MAX, getList };
  }
});
</script>
