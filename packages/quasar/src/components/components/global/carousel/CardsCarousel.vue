<template>
  <div>
    <q-carousel
      control-color="black"
      swipeable
      animated
      vertical
      ref="carousel"
      v-model="slide"
    >
      <q-carousel-slide
        v-for="i in length"
        :name="i"
        :key="i"
        class="row items-center"
      >
        <slot :name="`slide-` + i" />
      </q-carousel-slide>

      <template v-slot:control>
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
  name: 'CardsCarousel',
  components: {},
  props: {
    length: {
      type: Number
    }
  },
  setup() {
    const slide = ref(1);
    return { slide };
  }
});
</script>
