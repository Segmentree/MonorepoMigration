<template>
  <div>
    <q-list dense>
      <q-item v-for="(item, i) in list" :key="`bullet-${i}`">
        <q-item-label
          v-if="numericList"
          class="article-numeric-bullet-point text-bold"
          v-text="`${i + 1} - `"
        />
        <q-icon
          v-else
          name="mdi-checkbox-blank-circle"
          class="q-mr-sm q-mt-sm"
          :size="bulletPointSize"
        />
        <q-item-section>
          <span v-if="item.component == textComponent" v-text="item.text" />
          <article-text-field v-else v-bind="item" />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { ArticleTextSection, ArticleTextComponents } from '../../../models';
import ArticleTextField from './ArticleTextField.vue';

export default defineComponent({
  name: 'ArticleBulletPointsList',
  components: { ArticleTextField },
  props: {
    list: {
      type: Array as PropType<ArticleTextSection[]>,
      required: true
    },
    bulletPointSize: {
      type: String,
      default: '10px'
    },
    numericList: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return { textComponent: ArticleTextComponents.Text };
  }
});
</script>
