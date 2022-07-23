<template>
  <div class="global-carousel">
    <q-carousel
      swipeable
      animated
      v-model="model"
      ref="carousel"
      infinite
      class="text-grey-14"
    >
      <q-carousel-slide v-for="i in slides" :name="i" :key="i">
        <slot :name="`slide-` + i" />
      </q-carousel-slide>

      <template v-if="slides > 1" v-slot:control>
        <q-carousel-control class="carousel-controls" position="bottom-right">
          <div class="row justify-center items-center q-pb-sm">
            <q-btn
              round
              dense
              flat
              class="q-ma-sm carousel-btn"
              color="white"
              text-color="black"
              icon="mdi-chevron-left"
              @click="$refs.carousel.previous()"
            />
            <q-btn
              round
              dense
              flat
              class="q-ma-sm carousel-btn"
              color="white"
              text-color="black"
              icon="mdi-chevron-right"
              @click="$refs.carousel.next()"
            />
          </div>
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'Carousel',
  components: {},
  props: {
    slides: {
      type: Number,
      default: 1
    }
  },
  setup(props) {
    const model = ref(1);
    return { model, props };
  }
});
</script>
