<template>
  <div name="banner">
    <rating-banner
      v-if="rankingBanner"
      :via="'kiyoh'"
      :reviews="Number(rankingReviews)"
      :score="Number(rankingScore)"
      :via_logo="'/png/google.png'"
      :via_logo_width="'100px'"
      :show_via="false"
    />
    <section-component
      :class="`${$q.screen.gt.xs && 'banner-section'} q-pt-${paddingTop}`"
      :margin-top="false"
    >
      <div class="row">
        <div v-if="$q.screen.xs" class="col-12">
          <q-img :src="rightImage.filename" />
        </div>
        <banner-content
          id="content"
          :class="`${$q.screen.xs ? 'col-12' : 'col'}`"
          :style="`height: ${imgWidth}`"
          v-bind="$props"
          :search-word="searchWord"
          @input="filterCategories"
          @btn-click="$emit"
        />
        <div v-if="$q.screen.gt.xs" class="col">
          <div class="row justify-end">
            <q-img
              :width="imgWidth"
              :height="imgWidth"
              :src="rightImage.filename"
            />
          </div>
        </div>
      </div>
    </section-component>
    <div v-if="search && filteredList.length">
      <section-component :margin-top="false" :compact="true">
        <categories-result
          card-component-name="ContractsTypeCard"
          :items="filteredList"
        />
      </section-component>
    </div>
    <known-from v-if="footBanner" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  PropType,
  ref,
  Ref,
} from 'vue';
import BannerContent from './BannerContent.vue';
import KnownFrom from '../../KnownFrom.vue';
import CategoriesResult from '../categories_search/CategoriesResults.vue';
import SectionComponent from '../Section.vue';

import {
  BannerList,
  Button,
  SubBanner,
  CategoryItem,
  ReviewRatingObject
} from '../../../models';
import { useQuasar } from 'quasar';
import { StoryblokImage } from '../../../../storyblook';

const PERCENTS = {
  xl: '80%',
  lg: '85%',
  md: '90%'
};

export default defineComponent({
  name: 'MainBanner',
  components: { BannerContent, KnownFrom, CategoriesResult, SectionComponent },
  props: {
    rankingBanner: { type: Boolean, default: false },
    rankingReviews: { type: String, default: '190' },
    rankingScore: { type: String, default: '8.4' },
    rightImage: { type: (Object as unknown) as PropType<StoryblokImage> },
    title: { type: String },
    titleBadge: { type: String },
    subtitle: { type: String },
    text: { type: String },
    list: {
      type: (Array as unknown) as PropType<BannerList[]>
    },
    appendBanner: { type: (Array as unknown) as PropType<SubBanner[]> },
    footBanner: { type: Boolean, default: false },
    buttons: { type: (Array as unknown) as PropType<Button[]> },
    fullScreen: {
      type: Boolean,
      default: false
    },
    search: {
      type: Boolean,
      default: false
    },
    searchLabel: String,
    categoryItems: (Array as unknown) as PropType<CategoryItem[]>,
    reviewSection: (Array as unknown) as PropType<ReviewRatingObject[]>,
    paddingTop: String
  },
  setup(props) {
    const $q = useQuasar()
    const searchWord = ref('');
    const filteredList = ref({}) as Ref<CategoryItem[]>;

    const imgWidth = computed(() => {
      if ($q.screen.gt.lg) return PERCENTS.xl;
      if ($q.screen.gt.md) return PERCENTS.lg;
      return PERCENTS.md;
    });

    function filterCategories($event) {
      searchWord.value = $event;
      filteredList.value = props.categoryItems.filter((x) =>
        x.title.toLowerCase().includes(searchWord.value.toLowerCase())
      );
    }

    return {
      searchWord,
      filterCategories,
      filteredList,
      imgWidth
    };
  }
});
</script>
