<template>
  <div class="row justify-center full-height purple-card">
    <div class="col-10">
      <q-icon class="q-mt-md" :size="iconSize" :name="`img:${icon}`" />
      <div class="row text-dark w-600 q-py-sm">
        <h5>{{ title }}</h5>
      </div>
      <div class="row t2 text-grey-5 q-pb-xl">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PurpleCard',
  props: {
    icon: {
      type: String,
      default: '/svg/purple_card_icon.svg'
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    fixed_height: {
      type: Number,
      default: 300
    },
    iconSize: {
      type: String,
      default: '70px'
    }
  }
});
</script>
