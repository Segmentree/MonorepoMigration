<template>
  <div class="row items-start justify-between">
    <div class="col-12 font-21 w-600">
      <span v-text="titleLeft" />
      <span v-if="titleRight" class="text-grey-7" v-text="titleRight" />
    </div>
    <span class="col-12 text-blue font-17 w-400" v-text="subtitle" />
    <q-list class="col-12 font-16 q-mt-md" dense>
      <div
        v-for="(item, i) in bulletPoints"
        :key="`item-${i}`"
        class="q-pa-none q-mt-xs"
      >
        <q-icon
          class="q-mr-sm"
          :name="BULLET_POINT_ICON"
          :size="BULLET_POINT_SIZE"
        />
        <span class="font-15 w-400" v-text="item.text" />
      </div>
    </q-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

const BULLET_POINT_SIZE = '14px';
const BULLET_POINT_ICON = 'img:/icons/membership-check-icon.svg';

export default defineComponent({
  name: 'MembershipSubsection',
  props: {
    titleLeft: {
      type: String,
      required: true
    },
    titleRight: String,
    subtitle: {
      type: String,
      required: true
    },
    bulletPoints: {
      type: Array as PropType<string[]>,
      required: true
    }
  },
  data() {
    return {
      BULLET_POINT_SIZE,
      BULLET_POINT_ICON
    };
  }
});
</script>
