<template>
  <div>
    <membership-card :card="getCard" :selector="selector" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import { MembershipCard } from '@ligo/shared/components';
import { BilledCard } from '@ligo/shared/models';

export default defineComponent({
  name: 'BilledCard',
  components: { MembershipCard },
  props: {
    selector: Boolean,
    card: Object as PropType<BilledCard>
  },
  setup(props) {
    const getCard = computed(() => {
      const { items, yearlyItems, btnUrl, btnYearlyUrl, ...rest } = props.card;
      return {
        items:
          props.selector && yearlyItems && yearlyItems.length
            ? yearlyItems
            : items,
        btnUrl: props.selector && btnYearlyUrl ? btnYearlyUrl : btnUrl,
        ...rest
      };
    });
    return { getCard };
  }
});
</script>
