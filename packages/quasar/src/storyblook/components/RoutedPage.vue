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
import {useI18n} from 'vue-i18n'
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'RoutedPage',
  props: {
    slug: { type: String, required: true }
  },
  setup(props, { emit }) {
    const { slug } = toRefs(props);
    const router = useRouter()
    const i18n = useI18n()
    
    const { story, key } = useStoryblok(slug, router, emit, i18n.locale);
    return { story, key };
  }
});
</script>
