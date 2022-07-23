<template>
  <div id="support-info" class="row justify-center">
    <q-icon id="support-icon" size="lg" :name="icon" />
    <div id="support-content" class="q-pl-md">
      <div v-if="$q.screen.gt.xs" class="font-20 w-600">
        {{ $t(title) }}
      </div>
      <div v-if="$q.screen.gt.xs" class="font-16 w-600">
        {{ $t(subtitle) }}
      </div>
      <div v-if="$q.screen.gt.sm" class="row support-container text-grey-9">
        <div v-for="(text, i) in info" :key="'text-' + i">
          <span v-if="i > 0" class="q-pl-xs"> {{ separator }} </span>
          {{ $t(text) }}
        </div>
      </div>
      <q-item
        class="font-20 w-500 text-primary q-px-none text-underline"
        clickable
        @click="$emit('action')"
      >
        {{ $t(text) }}
      </q-item>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'SuppportInfo',
  props: {
    title: String,
    subtitle: String,
    icon: String,
    actionText: String,
    actionTextMobile: String,
    info: (Array as unknown) as PropType<string[]>,
    separator: {
      type: String,
      default: '|'
    }
  },
  computed: {
    text() {
      if (this.$q.screen.gt.xs || !this.actionTextMobile)
        return this.actionText;
      return this.actionTextMobile;
    }
  }
});
</script>
