<template>
  <section-component>
    <span class="text-grey-14 font-28 w-600 q-px-md" v-text="title" />

    <div class="row q-mt-md">
      <div
        v-for="(topic, i) in topics"
        :key="`topic-${i}`"
        class="col-xs-12 col-sm-4 q-px-md q-py-sm text-grey-7 font-22 w-600"
      >
        <a v-if="topic.external" :href="topic.link">
          <span v-text="topic.text" />
        </a>
        <router-link v-else :to="buttonLink">
          <span v-text="topic.text" />
        </router-link>
      </div>
    </div>
  </section-component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { TopicObject } from '../../../models/knowledge_bank/other-topics';

import SectionComponent from '../../global/Section.vue';

export default defineComponent({
  name: 'OtherTopics',
  components: {
    SectionComponent
  },
  props: {
    title: {
      type: String,
      required: true
    },
    topics: {
      type: Array as PropType<TopicObject[]>,
      required: true
    }
  }
});
</script>
