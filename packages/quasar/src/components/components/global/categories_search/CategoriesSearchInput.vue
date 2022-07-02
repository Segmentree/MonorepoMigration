<template>
  <q-input
    outlined
    :value="value"
    @input="$emit('input', $event)"
    :label="label"
  >
    <template v-slot:append>
      <q-icon
        v-if="value !== ''"
        name="close"
        @click="$emit('input', '')"
        class="cursor-pointer"
      />
      <q-icon v-else name="search" />
    </template>
  </q-input>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'BannerSearch',
  props: {
    value: String,
    label: String
  }
});
</script>
