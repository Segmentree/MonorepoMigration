<template>
  <q-list class="l1 w-400 text-grey-5">
    <q-item
      :class="['q-px-none', { 'q-mb-sm': !banner }]"
      v-for="(item, i) in items"
      :key="i"
    >
      <div class="full-width row items-center">
        <div class="row justify-center">
          <q-img
            :src="
              item.icon && item.icon.filename
                ? item.icon.filename
                : defaultIcon.filename
            "
            style="width: 30px"
          />
        </div>
        <div
          :class="[
            'col-10 q-pl-md',
            {
              'text-primary w-600': item.highlighted,
              't2 w-400': !banner,
            },
          ]"
        >
          {{ item.text }}
        </div>
      </div>
    </q-item>
  </q-list>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { TextItem } from '../../models/global-types/global-types';
import { StoryblokImage } from '../../../storyblook';
export default defineComponent({
  name: 'ListWithIcons',
  components: {},
  props: {
    items: {
      type: Array as unknown as PropType<TextItem>,
    },
    defaultIcon: {
      type: Object as unknown as PropType<StoryblokImage>,
    },
    banner: Boolean,
  },
});
</script>
