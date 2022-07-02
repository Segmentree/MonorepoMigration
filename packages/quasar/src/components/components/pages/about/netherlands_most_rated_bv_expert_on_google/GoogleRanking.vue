<template>
  <div class="full-width row items-center">
    <div class="col-3">
      <q-img :src="img1" />
    </div>
    <div class="row">
      <q-separator
        class="q-mx-md"
        color="grey"
        style="height: 50px !important; width: 2px !important"
        vertical
      />
    </div>
    <div class="col-8">
      <q-rating
        class="rating-banner"
        disable
        color="yellow"
        size="24px"
        v-model="rating_value"
        icon="img:svg/star_unselected.svg"
        icon-selected="img:svg/star.svg"
        icon-half="img:png/star_half.png"
      />
      <div class="full-width row q-pt-sm w-300 font-18">
        {{ $t('rating.left') }} {{ reviews }}
        {{ $t('rating.right') }}
      </div>
      <!-- <q-img :src="img2" /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'GoogleRanking',
  components: {},
  props: {
    img1: {
      type: String,
      required: true
    },
    img2: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      default: 4
    },
    reviews: {
      type: Number,
      default: 190
    }
  },
  setup(props) {
    const rating_value = ref(props.rating);
    return { rating_value };
  }
});
</script>
