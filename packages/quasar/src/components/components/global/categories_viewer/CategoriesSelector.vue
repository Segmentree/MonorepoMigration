<template>
  <div class="row">
    <base-button
      v-for="(item, i) in categories"
      class="q-mr-md q-mt-md"
      :key="'category-' + i"
      :text="item"
      bg="primary"
      fontSize="font-16"
      :fullWidth="false"
      :minWidth="''"
      :outline="i !== index"
      @btn-click="$emit('update:index', i)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import BaseButton from '../../base/BaseButton.vue';
export default defineComponent({
  name: 'CategoriesSelector',
  components: { BaseButton },
  props: {
    categories: (Array as unknown) as PropType<string[]>,
    index: {
      type: Number,
      default: 0
    }
  }
});
</script>
