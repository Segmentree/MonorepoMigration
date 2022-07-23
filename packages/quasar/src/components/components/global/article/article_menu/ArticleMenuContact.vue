<template>
  <div>
    <div class="font-18 w-400 text-grey-10">
      {{ contact.title }}
    </div>
    <div class="q-py-md">
      <div v-for="(item, i) in contact.contacts" :key="`contact-${i}`">
        <a class="pointer" :href="item.link">
          <q-icon :size="ICON_SIZE" :name="`img:${item.icon.filename}`" />
          <span class="font-20 w-600 q-px-sm">
            {{ item.text }}
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ArticleMenuContact } from '../../../../models';

export default defineComponent({
  name: 'ArticleMenuShare',
  props: {
    contact: {
      type: Object as PropType<ArticleMenuContact>
    }
  },
  data: function () {
    const ICON_SIZE = '30px';
    return {
      ICON_SIZE
    };
  }
});
</script>
