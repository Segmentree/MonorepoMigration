<template>
  <div class="row">
    <div
      @mouseenter="enable = false"
      @mouseleave="enable = true"
      class="col-12 row"
    >
      <div class="col-10 text-dark row items-center">
        <div class="t2">{{ text }}</div>
      </div>
      <div class="col-2 row justify-end">
        <img
          :src="enable ? logo : hover"
          style="height: 100px !important; width: 200px !important"
        />
      </div>
      <div class="full-width">
        <q-separator color="grey-1" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'AwardsSections',
  components: {},
  props: {
    text: {
      type: String,
      default: 'Title'
    },
    logo: {
      type: String,
      default: '../svg/forbes.svg'
    },
    hover: {
      type: String,
      default: '../svg/forbes_hover.svg'
    }
  },
  setup() {
    const enable = ref(true);
    return { enable };
  }
});
</script>
