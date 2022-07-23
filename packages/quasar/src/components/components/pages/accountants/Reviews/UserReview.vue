<template>
  <div class="row justify-center">
    <div class="col-12 w-600 text-grey-14 row justify-center q-mb-xl">
      <h2>{{ title }}</h2>
    </div>
    <div class="col-lg-5 col-md-7 col-12">
      <div class="full-width row justify-center text-center">
        <div class="col-12 q-my-md">
          <q-img :src="carousel[0].img.filename" class="flex-width-100" />
        </div>
        <div class="col-12 w-600">
          <h4>{{ carousel[0].title }}</h4>
        </div>
        <div class="col-12 t2 text-grey-1 q-mb-lg">
          {{ carousel[0].subtitle }}
        </div>
        <div class="col-12 t0 text-grey-14">
          {{ carousel[0].text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { CarouselSlide } from '../../../../models';

export default defineComponent({
  name: 'UserReview',
  props: {
    title: { type: String },
    carousel: { type: (Array as unknown) as PropType<CarouselSlide[]> }
  }
});
</script>
