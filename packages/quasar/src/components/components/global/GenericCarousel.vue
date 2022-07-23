<template>
  <q-card flat>
    <div
      v-if="size > itemsPerSlide"
      :class="`${!wrapperBefore && 'absolute-bottom'}`"
    >
      <basic-stepper-wrapper
        class="full-width sticky-element"
        :active="index"
        :steps-number="size"
        :mobile-width-percent="mobileWidthPercent"
        :desktop-width-percent="desktopWidthPercent"
        @previous="
          stopAutoplay();
          prevSlide();
        "
        @next="
          stopAutoplay();
          nextSlide();
        "
        @changeActive="changeActive"
      />
    </div>
    <fluid-card-slider
      ref="slider"
      :class="`full-width ${!wrapperBefore && 'q-pb-xl'}`"
      :items="items"
      :cards-per-slide="itemsPerSlide + 1"
      :cyclic="cyclic"
    >
      <template #default="props">
        <slot :item="props.item" :maxHeight="props.maxHeight" />
        <!-- this maxHeight can be used in the slot to set all cards to the same height-->
        <!-- use this in the slot component :style="`${props.maxHeight && 'min-height:' + props.maxHeight + 'px;'}`"-->
      </template>
    </fluid-card-slider>
  </q-card>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  PropType,
  onMounted
} from 'vue';
import { useQuasar } from 'quasar';
import FluidCardSlider from '../base/FluidCardSlider.vue'
import BasicStepperWrapper from '../base/BasicStepperWrapper.vue'

export default defineComponent({
  name: 'Itemslider',
  components: {
    FluidCardSlider,
    BasicStepperWrapper
  },
  props: {
    items: {
      type: (Array as unknown) as PropType<any[]>,
      required: true
    },
    cyclic: {
      type: Boolean,
      default: true
    },
    slidesPerScreen: {
      //This property indicates how many slides per screen we want to show
      //for each screen size
      //[grater than lg , grater than md, grater than sm, grater than xs] in that order
      //first option in true set the value
      type: (Array as unknown) as PropType<Array<number>>,
      default: () => [2, 2, 2, 1]
    },
    ///renders the wrapper before or after the cards
    wrapperBefore: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    interval: {
      type: Number,
      default: 5
    },

    /*after X miliseconds without pressing next or prev the slide will restart
    the automatic movement if autoplay=true*/
    restartAfter: {
      type: Number,
      default: 5
    },
    mobileWidthPercent: {
      type: Number,
      default: 100
    },
    desktopWidthPercent: {
      type: Number,
      default: 100
    }
  },

  setup(props) {
    const $q = useQuasar()
    const slider = ref(null);
    const index = ref(0);
    const size = props.items.length;
    const inAutoplay = ref(true);

    const itemsPerSlide = computed(() => {
      const screen = $q.screen.gt;

      if (screen.lg) return props.slidesPerScreen[0];
      if (screen.md) return props.slidesPerScreen[1];
      if (screen.sm) return props.slidesPerScreen[2];
      return props.slidesPerScreen[3];
    });

    function nextSlide() {
      if (!props.cyclic && index.value + itemsPerSlide.value == size + 1)
        return;
      index.value++;
      index.value = index.value % size;

      slider.value.right();
    }

    function prevSlide() {
      if (!props.cyclic && index.value == 0) return;

      index.value--;
      index.value = ((index.value % size) + size) % size;
      slider.value.left();
    }

    function changeActive(newIndex: number) {
      if (newIndex > index.value) {
        while (index.value < newIndex) {
          slider.value.right();
          index.value++;
        }
      } else {
        while (index.value > newIndex) {
          slider.value.left();
          index.value--;
        }
      }
    }

    const interv = ref(null);
    function startAutoplay() {
      if (props.autoplay)
        interv.value = setInterval(nextSlide, props.interval * 1000);
    }

    function stopAutoplay() {
      clearInterval(interv.value);

      setTimeout(() => {
        clearInterval(interv.value);
        if (props.autoplay)
          interv.value = setInterval(nextSlide, props.interval * 1000);
      }, props.restartAfter * 1000);
    }

    onMounted(() => {
      startAutoplay();
    });

    return {
      slider,
      index,
      size,
      itemsPerSlide,
      prevSlide,
      nextSlide,
      changeActive,
      stopAutoplay,
      inAutoplay
    };
  }
});
</script>
