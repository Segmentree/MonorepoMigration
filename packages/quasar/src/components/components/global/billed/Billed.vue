<template>
  <section-component>
    <div class="row items-center q-pb-lg">
      <h5>{{ billedMonthly }}</h5>
      <q-toggle v-model="selector" color="warning" keep-color />
      <h5>{{ billedYearly }}</h5>
      <div class="q-pl-sm">
        <q-card v-if="save" class="bg-orange text-white q-px-sm w-600 font-14">
          {{ save }}
        </q-card>
      </div>
    </div>
    <basic-stepper-wrapper
      v-if="steps > 1"
      class="sticky-element pricing-table-stepper"
      :style="`top: ${toolbarHeight}px;`"
      :active="index"
      :steps-number="steps"
      @previous="prevSlide"
      @next="nextSlide"
      @changeActive="changeActive"
    />
    <fluid-card-slider
      ref="slider"
      :items="cards"
      :cards-per-slide="cardsPerSlide"
      :cyclic="false"
    >
      <template #default="props">
        <billed-card-component :card="props.item.val" :selector="selector" />
      </template>
    </fluid-card-slider>
  </section-component>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  onMounted,
  ref,
  computed
} from 'vue';
import SectionComponent from '../Section.vue';
import { BilledCard } from '@ligo/shared/models';
import BilledCardComponent from './BilledCard.vue';
import { BasicStepperWrapper, FluidCardSlider } from '@ligo/shared/components';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'Billed',
  components: {
    SectionComponent,
    FluidCardSlider,
    BasicStepperWrapper,
    BilledCardComponent
  },
  props: {
    billedMonthly: String,
    billedYearly: String,
    save: String,
    cards: (Array as unknown) as PropType<BilledCard[]>
  },
  setup(props) {
    const $q = useQuasar()
    const toolbarHeight = ref(null);
    const index = ref(0);
    const slider = ref(null);
    const selector = ref(true);

    const steps = computed(() => {
      const size = props.cards.length;
      const screen = $q.screen.gt;
      if (screen.md) return size - 3;
      if (screen.sm) return size - 2;
      if (screen.xs) return size - 1;
      return size;
    });

    const cardsPerSlide = computed(() => {
      const screen = $q.screen.gt;
      if (screen.md) return 5;
      if (screen.sm) return 4;
      if (screen.xs) return 3;
      return 2;
    });

    onMounted(() => {
      toolbarHeight.value = document.getElementById(
        'landing-toolbar'
      )?.offsetHeight;
      if (toolbarHeight.value) toolbarHeight.value--;
    });

    function prevSlide() {
      if (index.value - 1 >= 0) {
        index.value--;
        slider.value.left();
      }
    }

    function nextSlide() {
      if (index.value + 1 <= steps.value - 1) {
        index.value++;
        slider.value.right();
      }
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

    return {
      toolbarHeight,
      index,
      steps,
      prevSlide,
      nextSlide,
      slider,
      cardsPerSlide,
      changeActive,
      selector
    };
  }
});
</script>
