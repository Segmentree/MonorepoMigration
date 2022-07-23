<template>
  <section-component>
    <div :class="`row items-center q-mt-${topMargin}`">
      <div :class="`col-12 q-py-md q-pl-${$q.screen.gt.sm ? 'lg' : 'none'}`">
        <div :class="['text-purple font-18 q-py-md row', tagTextOptions]">
          <div v-for="(tag, i) in tags" :key="`tag_${i}`" class="q-mr-md">
            {{ tag.text }}
          </div>
        </div>
        <div :class="['font-50 w-600', titleTextOptions]">
          {{ title }}
        </div>
        <div :class="['font-18 w-400 q-py-md', overviewTextOptions]">
          {{ overview }}
        </div>

        <div
          :class="[
            'font-14 w-400 q-py-xs text-grey-14',
            readingTimeTextOptions
          ]"
        >
          {{ estimatedReadingTime }}
        </div>
        <div class="font-14 w-400 q-py-md text-grey-14">
          <div class="row items-center">
            <div class="col-1">
              <q-avatar>
                <q-img :src="authorPicture.filename" class="full-height" />
              </q-avatar>
            </div>
            <div :class="['col w-400 q-px-md', authorTextOptions]">
              <div class="font-18">
                {{ authorName }}
              </div>
              <div class="font-14 text-grey-10">
                {{ authorPublicationDate }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <q-img :src="img.filename" />
      </div>
    </div>
  </section-component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { StoryblokImage } from '../../../../storyblook';

export default defineComponent({
  name: 'ArticleBanner',
  props: {
    title: String,
    overview: String,
    tags: Array as PropType<string[]>,
    img: Object as PropType<StoryblokImage>,
    estimatedReadingTime: String,
    authorPicture: Object as PropType<StoryblokImage>,
    authorName: String,
    authorPublicationDate: String,
    titleTextOptions: Array as PropType<string[]>,
    overviewTextOptions: Array as PropType<string[]>,
    readingTimeTextOptions: Array as PropType<string[]>,
    authorTextOptions: Array as PropType<string[]>,
    tagTextOptions: Array as PropType<string[]>,
    topMargin: {
      type: String,
      default: 'none'
    }
  }
});
</script>
