<template>
  <div v-if="story">
    <page
      :key="'story-' + key"
      :name="slug"
      :bloks="story.content.body"
      :meta="story.content.meta && story.content.meta[0]"
      :ld-json="story.content.ldJson && story.content.ldJson[0]"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import { useStoryblok } from './storyblok.hook';

export default defineComponent({
  name: 'RoutedPage',
  props: {
    slug: { type: String, required: true }
  },
  setup(props, { root, emit }) {
    const { slug } = toRefs(props);
    const { story, key } = useStoryblok(slug, root, emit);
    return { story, key };
  }
});
</script>
