<template>
  <div class="row items-center">
    <div class="col-12">
      <div class="banner-title w-600 q-py-lg">
        <q-badge
          v-if="titleBadge"
          class="font-16 w-500 text-uppercase q-px-sm"
          color="orange"
        >
          {{ titleBadge }}
        </q-badge>
        <h1>{{ title }}</h1>
      </div>
      <div class="banner-subtitle w-400">
        <div class="s1">
          {{ subtitle }}
        </div>
      </div>
      <div v-if="text" class="banner-text w-300 q-pt-lg">
        <div class="t2">
          {{ text }}
        </div>
      </div>
      <div v-if="list && list[0]" class="q-pt-md">
        <list-with-icons
          :items="list[0].items"
          :default-icon="list[0].icon"
          banner
        />
      </div>
      <div v-if="buttons && buttons.length" class="w-600 q-my-lg row">
        <div v-for="(button, i) in buttons" :key="i" class="q-pr-sm q-pt-xs">
          <div class="row justify-center items-center">
            <q-form v-if="button.post" :action="button.link" method="post">
              <base-button
                :class="`c-minw-250`"
                :outline="button.outline"
                :bg="button.color"
                :text="button.key"
                type="submit"
              />
            </q-form>
            <a v-else-if="button.external" :key="i" :href="button.link">
              <base-button
                class="c-minw-250"
                :outline="button.outline"
                :bg="button.color"
                :text="button.key"
              />
            </a>
            <router-link v-else-if="button.link" :key="i" :to="button.link">
              <base-button
                class="c-minw-250"
                :outline="button.outline"
                :bg="button.color"
                :text="button.key"
              />
            </router-link>
            <base-button
              v-else
              :key="i"
              class="c-minw-250"
              :outline="button.outline"
              :bg="button.color"
              :text="button.key"
              @btn-click="$emit('btn-click', button.emit)"
            />
            <reduction-label
              v-if="button.strikeThrough && button.strikeThrough[0]"
              class="q-px-md"
              :left-string="button.strikeThrough[0].leftString"
              :right-string="button.strikeThrough[0].rightString"
            />
          </div>
        </div>
      </div>
      <div v-if="search" class="q-mt-xl">
        <categories-search-input
          :value="searchWord"
          :label="searchLabel"
          @input="$emit('input', $event)"
        />
      </div>
      <div v-if="reviewSection.length > 0" class="q-mt-xl row justify-start">
        <review-with-rating
          v-for="(reviewObject, i) in reviewsToShow"
          :key="'reviewObject-' + i"
          class="q-my-sm col-12 col-md-5 col-lg-4"
          v-bind="reviewObject"
        />
      </div>
      <div
        v-if="appendBanner[0] && appendBanner[0].src.filename"
        class="q-py-lg"
      >
        <q-img :src="appendBanner[0].src.filename" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import CategoriesSearchInput from '../categories_search/CategoriesSearchInput.vue';
import { SubBanner, Button, BannerList } from '../../../models';
import ListWithIcons from '../../base/ListWithIcons.vue';
import ReviewWithRating from '../review_with_rating/ReviewWithRating.vue';

import { ReviewRatingObject } from '../../../models';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'BannerContent',
  components: {
    CategoriesSearchInput,
    ListWithIcons,
    ReviewWithRating
  },
  props: {
    xsBreakpoint: {
      type: Number,
      default: 435
    },
    mdBreakpoint: {
      type: Number,
      default: 1024
    },
    reviewSection: {
      type: (Array as unknown) as PropType<ReviewRatingObject[]>,
      default: () => []
    },
    title: { type: String },
    titleBadge: { type: String },
    subtitle: { type: String },
    text: { type: String },
    list: {
      type: (Array as unknown) as PropType<BannerList[]>
    },
    appendBanner: {
      type: (Array as unknown) as PropType<SubBanner[]>,
      default: () => []
    },
    type: { type: (String as unknown) as PropType<'top' | 'center'> },
    buttons: { type: (Array as unknown) as PropType<Button[]> },
    search: {
      type: Boolean,
      default: false
    },
    searchLabel: String,
    searchWord: String
  },
  setup(props) {
    const $q = useQuasar()
    const reviewsToShow = computed(() => {
      if ($q.screen.xs) return props.reviewSection.slice(0, 2);
      return props.reviewSection;
    });
    return { reviewsToShow };
  }
});
</script>
