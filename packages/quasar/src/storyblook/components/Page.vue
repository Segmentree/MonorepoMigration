<template>
  <div>
    <component
      v-bind="blok"
      :is="blok.component"
      v-for="(blok, i) in bloks"
      :key="`${name}-section-${i}`"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
// import { Meta, setMeta } from '@ligo/shared/utils';
import { Blok } from '../models/blok';
import Section from './Grid.vue';
// import { triggerRouteGTM } from './gtm.hook';
// import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Page',
  components: {
    Section
  },
  props: {
    name: { type: String, required: true },
    bloks: { type: (Array as unknown) as PropType<Blok[]>, required: true },
    // meta: { type: (Object as unknown) as PropType<Meta>, required: true },
    ldJson: (Object as unknown) as PropType<{ type: string; innerHTML: string }>
  },
  // meta(root) {
  //   let ldJson = root.$props.ldJson;
  //   if (!ldJson || !ldJson.type || !ldJson.innerHTML) ldJson = undefined;
  //   return setMeta(root.$props.meta, ldJson);
  // },
  setup(props) {
    // triggerRouteGTM(useRoute(), props.meta);
    return {};
  }
});
</script>
