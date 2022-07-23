<template>
  <div :class="`font-${fontSize} row`">
    <span
      v-if="leftString"
      :class="` text-${dark ? 'white' : 'grey-5'} q-mr-sm text-crossed`"
    >
      {{ leftString }}
    </span>
    <span v-if="rightString" class="text-primary">
      {{ rightString }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ReductionLabel',
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    leftString: {
      type: String
    },
    rightString: {
      type: String
    },
    fontSize: {
      type: String,
      default: '20'
    }
  }
});
</script>
