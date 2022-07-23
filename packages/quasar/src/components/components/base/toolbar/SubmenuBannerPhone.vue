<template>
  <div>
    <span v-if="phone.icon">
      <q-icon class="q-mr-xs" size="md" :name="`img:${phone.icon}`" />
    </span>
    <span>
      <a :href="phone.url">
        {{ phone.text }}
      </a>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { SubmenuBannerPhone } from '../../../models';

export default defineComponent({
  name: 'SubmenuBannerPhone',
  props: {
    phone: Object as PropType<SubmenuBannerPhone>
  }
});
</script>
