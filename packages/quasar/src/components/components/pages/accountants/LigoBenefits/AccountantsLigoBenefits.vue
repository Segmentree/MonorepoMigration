<template>
  <div class="column justify-between">
    <icon-list :header="header" :list="items.filter((item) => !!item.text)" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { TextItem } from '../../../../models';

export interface AccountantsLigoBenefitsProps {
  header: string;
  items: TextItem[];
}

export default defineComponent({
  name: 'AccountantsLigoBenefits',
  props: {
    header: { type: String },
    items: { type: (Array as unknown) as PropType<TextItem[]> }
  }
});
</script>
