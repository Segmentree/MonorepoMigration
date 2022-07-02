<template>
  <div :class="textFormat">
    <span v-for="(item, i) in content" :key="`text-item-${i}`">
      <span v-if="item.component === textComponent">
        {{ item.text }}
      </span>
      <span
        v-else
        :class="`${linkClass(item.color.selected)} q-py-xs`"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
      >
        <a :href="item.link">
          {{ item.text }}
        </a>
      </span>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ArticleTextSection, ArticleTextComponents } from '../../../models';

export default defineComponent({
  name: 'ArticleTextSection',
  props: {
    content: Array as PropType<ArticleTextSection[]>,
    textFormat: Array as PropType<string[]>
  },
  data: () => ({
    textComponent: ArticleTextComponents.Text,
    hover: false
  }),
  methods: {
    linkClass(color: string) {
      return this.hover
        ? `bg-${color} text-white`
        : `text-decoration-${color} text-underline`;
    }
  }
});
</script>
