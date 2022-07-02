<template>
  <div class="row q-py-sm">
    <div :style="`width: ${col}%;`" />
    <div
      v-for="(head, i) in headers"
      :key="'head-' + i"
      :style="`width: ${col}%;`"
      :class="`w-600 q-pl-${$q.screen.gt.xs && 'xs'} ${
        slideDir ? 'slide-right' : 'slide-left'
      }`"
    >
      <header-card
        :title="head.label"
        :active="head.active"
        :activeText="head.activeCornerLabel"
        :link="head.link"
        :btnLabel="head.btnLabel"
        :external="head.external"
        class="full-height"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { PricingTableHead } from '../../../models';
import HeaderCard from './header_card/HeaderCard.vue';
export default defineComponent({
  name: 'PricingTableHeader',
  components: { HeaderCard },
  props: {
    col: Number,
    headers: (Array as unknown) as PropType<PricingTableHead[]>,
    slideDir: Boolean
  }
});
</script>
