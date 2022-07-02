<template>
  <div>
    <q-linear-progress
      class="full-width article-progress-bar"
      :value="getProgressPercentage"
      :size="LINEAR_PROGRESS_SIZE"
      :style="`top: ${toolbarHeight}px;`"
    />
    <section-component>
      <div id="article-container" class="row items-start">
        <div
          :class="`col-12 col-sm-4 col-md-3 col-lg-3 w-600 ${
            $q.screen.gt.xs ? 'article-menu' : 'q-pb-xl'
          }`"
        >
          <article-menu :menu="menu" />
        </div>
        <div :class="`col-xs-12 col-sm q-pl-${$q.screen.gt.xs && 'xl'}`">
          <div
            v-for="(section, i) in sections"
            :id="`${section.reference}`"
            :key="`section-${i}`"
          >
            <div
              v-for="(content, j) in section.contents"
              :key="`content-${j}`"
              class="q-pb-md w-400 font-18"
            >
              <component v-bind="content" :is="`Article${content.component}`" />
            </div>
          </div>
        </div>
      </div>
    </section-component>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  computed,
  onMounted,
  ref
} from 'vue';
import { install } from '@ligo/shared/utils';
import Vue from 'vue';
import * as ArticleComponents from './';
import { ArticleSection, ArticleMenu } from '../../../models';
import { scrollPercentage } from '@ligo/shared/utils';

const SCROLL_OFFSET = 160;
const LINEAR_PROGRESS_SIZE = '6px';

export default defineComponent({
  name: 'Article',
  props: {
    menu: {
      type: (Array as unknown) as PropType<ArticleMenu[]>
    },
    sections: {
      type: (Array as unknown) as PropType<ArticleSection[]>
    }
  },
  setup() {
    const toolbarHeight = ref(0);
    install(Vue, Object.values(ArticleComponents));
    const { percentage } = scrollPercentage(
      '#article-container',
      SCROLL_OFFSET
    );
    const getProgressPercentage = computed(() => {
      return percentage.value / 100;
    });
    onMounted(() => {
      const toolbar = document.querySelector('#landing-toolbar');
      toolbarHeight.value = toolbar.getBoundingClientRect().height;
    });
    return {
      percentage,
      getProgressPercentage,
      toolbarHeight,
      LINEAR_PROGRESS_SIZE
    };
  }
});
</script>
