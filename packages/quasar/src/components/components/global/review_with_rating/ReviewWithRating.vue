<template>
  <q-item v-if="!loading" class="items-center q-pa-none">
    <q-avatar>
      <q-img :src="icon.filename" />
    </q-avatar>
    <q-separator class="q-mx-sm" vertical :color="separatorColor" />
    <q-item-section>
      <q-item-label class="row col-12 no-wrap w-700 font-16">
        {{ score }}
        <q-rating
          v-model="value"
          class="review-rating q-px-sm no-wrap"
          disable
          :size="REGULAR_ICON_SIZE"
          :icon="'img:' + ratingIcon.filename"
        />
      </q-item-label>
      <q-item-label>
        <div class="row col-12 font-16 w-400">
          {{ text }}
        </div>
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import { BlokImage } from '../../../models';
import { getStoryblokReviews } from '../../../../storyblook/services';

const SMALL_ICON_SIZE = '10px';
const REGULAR_ICON_SIZE = '19px';
const RATING_BASE = 5;

export default defineComponent({
  name: 'ReviewWithRating',
  components: {},
  props: {
    icon: Object as PropType<BlokImage>,
    dataSource: String,
    ratingIcon: Object as PropType<BlokImage>,
    separatorColor: String,
  },

  setup(props) {
    const { reviews, loading } = getStoryblokReviews();
    const value = computed(() => {
      return (
        (parseFloat(reviews.value[props.dataSource]?.score) * RATING_BASE) /
        parseFloat(reviews.value[props.dataSource]?.base)
      );
    });
    const score = computed(() => {
      return reviews.value[props.dataSource]?.score;
    });
    const text = computed(() => {
      return reviews.value[props.dataSource]?.text;
    });
    return { value, SMALL_ICON_SIZE, REGULAR_ICON_SIZE, loading, score, text };
  },
});
</script>
