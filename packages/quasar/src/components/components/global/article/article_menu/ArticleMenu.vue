<template>
  <div>
    <q-list>
      <q-item class="font-20 q-pt-none">
        {{ menu[0].title }}
      </q-item>
      <q-item
        v-for="(item, i) in menu[0].items"
        :key="`content-${i}`"
        clickable
        class="font-18 text-grey-10"
        @click="
          scrollToHtmlElement(
            `#${item.sectionReference}`,
            undefined,
            OFFSET_GAP
          )
        "
      >
        {{ item.text }}
      </q-item>
    </q-list>
    <div class="q-px-md q-py-lg">
      <q-separator :size="SEPARATOR_SIZE" color="grey-11" />
      <article-menu-share
        v-if="share && share[0]"
        class="q-py-md"
        :share="share[0]"
      />
      <article-menu-contact
        v-if="contact && contact[0]"
        class="q-py-md"
        :contact="contact[0]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ArticleMenuShare from './ArticleMenuShare.vue';
import ArticleMenuContact from './ArticleMenuContact.vue';
import { ArticleMenu } from '../../../../models';
import { scrollToHtmlElement } from '@ligo/shared/utils';

export default defineComponent({
  name: 'ArticleMenu',
  components: {
    ArticleMenuShare,
    ArticleMenuContact
  },
  props: {
    menu: {
      type: (Array as unknown) as PropType<ArticleMenu[]>
    }
  },
  data: function () {
    const SEPARATOR_SIZE = '1px';
    const OFFSET_GAP = 80;

    return {
      scrollToHtmlElement,
      SEPARATOR_SIZE,
      OFFSET_GAP,
      share: this.menu[0].share,
      contact: this.menu[0].contact
    };
  }
});
</script>
