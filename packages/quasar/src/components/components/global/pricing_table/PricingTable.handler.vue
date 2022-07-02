<template>
  <div>
    <basic-stepper-wrapper
      v-if="slides > 1"
      class="sticky-element pricing-table-stepper"
      :style="`top: ${toolbarHeight}px;`"
      :active="index"
      :steps-number="slides"
      @previous="prevSlide"
      @next="nextSlide"
      @changeActive="slideByHand"
    />
    <pricing-table-header
      v-if="showSlide"
      class="sticky-element pricing-table-headers"
      :style="`top: ${toolbarHeight + 50}px;`"
      :headers="dynamicHeaders"
      :col="dynamicCol"
      :slide-dir="slideDirection"
    />
    <pricing-table-sections
      v-if="showSlide"
      :col="dynamicCol"
      :sections="dynamicSections"
      :slide-dir="slideDirection"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  onMounted,
  ref
} from 'vue';
import { PricingTableSection, PricingTableHead } from '../../../models';
import PricingTableHeader from './PricingTableHeader.vue';
import PricingTableSections from './PricingTableSections.vue';
import { BasicStepperWrapper } from '@ligo/shared/components';
import { useData, tools } from './pricingtable.hooks';

export default defineComponent({
  name: 'PricingTable',
  components: {
    PricingTableHeader,
    PricingTableSections,
    BasicStepperWrapper
  },
  props: {
    columns: {
      type: Number,
      default: 5
    },
    sections: {
      type: (Array as unknown) as PropType<PricingTableSection[]>,
      required: true
    },
    headers: {
      type: (Array as unknown) as PropType<PricingTableHead[]>,
      required: true
    }
  },
  setup(props) {
    const { dynamicSections, dynamicHeaders, index, slides } = useData(
      root,
      props.sections,
      props.headers
    );
    const {
      dynamicCol,
      prevSlide,
      nextSlide,
      slideByHand,
      slideDirection,
      showSlide
    } = tools(root, props.columns);

    const toolbarHeight = ref(null);

    onMounted(() => {
      toolbarHeight.value = document.getElementById(
        'landing-toolbar'
      )?.offsetHeight;
      // This is needed because offsetHeight return the value rounded
      if (toolbarHeight.value) toolbarHeight.value--;
    });

    return {
      dynamicSections,
      dynamicHeaders,
      dynamicCol,
      toolbarHeight,
      slideDirection,
      showSlide,
      index,
      slides,
      prevSlide,
      nextSlide,
      slideByHand
    };
  }
});
</script>
