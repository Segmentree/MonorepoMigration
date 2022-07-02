<template>
  <div class="row">
    <div
      v-for="(item, i) in items"
      :key="'item-' + i"
      :class="`col-12 col-md-4 q-pl-${
        i % 3 != 0 && $q.screen.gt.sm && 'md'
      } q-py-sm`"
    >
      <component class="full-height" :is="cardComponentName" :object="item" />
    </div>
    <base-button
      v-if="viewAll"
      :text="viewAllText"
      bg="primary"
      class="q-py-sm q-px-md"
      @btn-click="$emit('viewAllItems')"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import BaseButton from '../../base/BaseButton.vue';

import { CategoryItem } from '../../../models';

export default defineComponent({
  components: { BaseButton },
  name: 'CategoriesContainer',
  props: {
    cardComponentName: String,
    items: (Array as unknown) as PropType<CategoryItem[]>,
    viewAll: {
      type: Boolean,
      default: false
    },
    viewAllText: String
  }
});
</script>
