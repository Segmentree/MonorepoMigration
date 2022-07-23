<template>
  <q-toolbar
    :class="
      `bg-${color} ${default_clases ? 'banner-ranking' : ''}` +
      ' ' +
      custom_class
    "
  >
    <div class="col-12 full-width row justify-center items-center">
      <div
        v-if="showScore"
        :class="`font-16 w-600 q-pt-sm q-mr-${
          $q.screen.gt.xs ? 'md' : 'sm'
        } text-${text_color}`"
      >
        {{ score }}
      </div>
      <q-rating
        v-if="$q.screen.gt.xs"
        class="rating-banner"
        disable
        color="yellow"
        size="18px"
        :value="rating"
        icon="img:../svg/star_unselected.svg"
        icon-selected="img:../svg/star.svg"
        icon-half="img:../png/star_half.png"
      />
      <div
        :class="`font-16 text-${text_color} w-400 q-pt-sm ${
          $q.screen.gt.xs ? 'q-ml-md' : ''
        }`"
      >
        {{ $t('rating_banner.left') }} {{ reviews }}
        {{ $t('rating_banner.right') }}
        <span v-if="show_via" class="font-18 w-600">{{
          $t('rating_banner.via.' + via)
        }}</span>
      </div>
      <q-img
        class="col-1 q-ml-sm q-mt-sm"
        :src="via_logo"
        :width="via_logo_width"
      />
      <div v-if="$q.screen.lt.sm" class="col-12 row justify-center q-py-sm">
        <q-rating
          class="rating-banner"
          disable
          color="yellow"
          size="16px"
          :value="rating"
          icon="img:../svg/star_unselected.svg"
          icon-selected="img:../svg/star.svg"
          icon-half="img:../png/star_half.png"
        />
      </div>
    </div>
  </q-toolbar>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
export default defineComponent({
  name: 'RatingBanner',
  components: {},
  props: {
    color: {
      type: String,
      default: 'grey-6'
    },
    text_color: {
      type: String,
      default: 'grey-5'
    },
    custom_class: {
      type: String,
      default: ''
    },
    score: {
      type: Number,
      default: 8.4
    },
    reviews: {
      type: Number,
      default: 190
    },
    via: {
      type: String,
      default: 'kiyoh'
    },
    show_via: {
      type: Boolean,
      default: true
    },
    via_logo: {
      type: String,
      default: '../svg/via_logo.svg'
    },
    via_logo_width: {
      type: String,
      default: '20px'
    },
    default_clases: {
      type: Boolean,
      default: true
    },
    showScore: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const rating = computed(() => props.score / 2)
    return { rating }
  }
});
</script>
