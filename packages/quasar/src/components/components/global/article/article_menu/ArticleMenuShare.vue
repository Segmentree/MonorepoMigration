<template>
  <div>
    <div class="font-14 w-600 text-grey-11 text-uppercase">
      {{ share.title }}
    </div>
    <div class="row q-py-md">
      <div v-for="(item, i) in share.links" :key="`item-${i}`" class="q-mr-md">
        <a :href="item.link">
          <q-icon :size="ICON_SIZE" :name="`img:${item.icon.filename}`" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ArticleMenuShare } from '../../../../models';

export default defineComponent({
  name: 'ArticleMenuShare',
  props: {
    share: {
      type: Object as PropType<ArticleMenuShare>
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
