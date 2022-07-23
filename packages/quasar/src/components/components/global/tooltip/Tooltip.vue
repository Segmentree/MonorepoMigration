<template>
  <q-btn flat round :size="size" color="primary" :icon="icon">
    <q-tooltip>
      <div class="font-14 q-pa-sm membership-tooltip">
        {{ tip }}
      </div>
    </q-tooltip>
  </q-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Tooltip',
  props: {
    tip: String,
    icon: String,
    size: {
      type: String,
      default: '15px'
    }
  }
});
</script>
