<template>
  <q-toolbar :class="`text-${textColor}  bg-${color}`">
    <div class="row col-12 q-my-md">
      <div
        v-for="(review, i) in reviews"
        :key="i"
        class="col-sm-4 justify-center q-px-none col-xs-6 row"
      >
        <review-with-rating dense v-bind="review" separator-color="white" />
      </div>
    </div>
  </q-toolbar>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import ReviewWithRating from '../../components/global/review_with_rating/ReviewWithRating.vue';
import { ReviewRatingObject } from '../../models/review_section/review-section';

export default defineComponent({
  name: 'ReviewsBanner',
  components: { ReviewWithRating },
  props: {
    reviews: (Array as unknown) as PropType<ReviewRatingObject[]>,
    color: {
      type: String,
      default: 'grey-6'
    },
    textColor: {
      type: String,
      default: 'grey-5'
    },
    defaultClases: {
      type: Boolean,
      default: false
    }
  }
});
</script>
