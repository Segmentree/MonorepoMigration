<template>
  <div :class="classes">
    <component
      v-for="(blok, i) in columns"
      v-bind="blok"
      :key="'grid-' + i"
      :is="blok.component"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import { Blok } from '../models/blok';

export default defineComponent({
  name: 'Grid',
  props: {
    columns: { type: (Array as unknown) as PropType<Blok[]>, required: true },
    classes: String
  }
});
</script>
