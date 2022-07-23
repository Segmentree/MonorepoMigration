<template>
  <div>
    <div class="text-grey-5 w-600">
      <h2>{{ header }}</h2>
    </div>

    <q-list
      :class="`t1 w-400 text-grey-5 q-mt-md q-ml-md ${
        $q.screen.lt.md ? 'q-mb-xl' : ''
      }`"
    >
      <q-item v-for="(item, idx) in list" :key="idx" class="q-px-none">
        <q-icon
          :name="item.icon ? item.icon : 'img:../svg/checkmark_icon.svg'"
          size="md"
        />
        <span class="q-ml-sm"> {{ item.text }} </span>
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IconListItem } from '../../models';

export default defineComponent({
  name: 'IconList',
  props: {
    header: {
      tpye: String,
      default: ''
    },
    list: {
      type: Array as PropType<IconListItem[]>,
      default: () => []
    }
  }
});
</script>

<style scoped></style>
