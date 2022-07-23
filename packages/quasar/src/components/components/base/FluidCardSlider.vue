<template>
  <div>
    <div class="row justify-center">
      <div ref="sliderContainer" class="slider-visible col-12">
        <div
          v-if="!loading"
          class="slider-container"
          :style="`margin-left: ${overflow + 'px'};`"
        >
          <transition-group name="fluid-slider" tag="div">
            <div
              v-for="(item, i) in cards"
              :key="item.id"
              :class="`fluid-slider-item q-pr-sm ${
                i === 0 && outLeft === true && 'out-left'
              }`"
              :style="`width: ${width}px`"
            >
              <div :id="item.id" ref="cardsRef" class="card">
                <slot :item="item" :maxHeight="height" />
              </div>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, watch } from 'vue';
import { setupSlider } from './fluid-card-slider.hooks';

export default defineComponent({
  name: 'FluidCardSlider',
  components: {},
  props: {
    items: {
      type: (Array as unknown) as PropType<any[]>,
      required: true
    },
    cardsPerSlide: {
      type: Number,
      default: 4
    },
    cyclic: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const {
      height,
      loading,
      overflow,
      cards,
      outLeft,
      width,
      left,
      right,
      sliderContainer,
      cardsRef,
      reset
    } = setupSlider(props.items, props.cardsPerSlide, props.cyclic);

    watch(
      () => props.cardsPerSlide,
      (newVal) => {
        reset(newVal);
      }
    );

    return {
      height,
      loading,
      overflow,
      cards,
      outLeft,
      width,
      left,
      right,
      sliderContainer,
      cardsRef,
      reset
    };
  }
});
</script>
