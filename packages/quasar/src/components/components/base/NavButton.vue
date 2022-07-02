<template>
  <q-form v-if="post" :action="buttonLink" method="post">
    <base-button
      type="submit"
      :text="buttonText"
      :bg="buttonBgColor"
      :fontColor="buttonFontColor"
      :min-width="$q.screen.lt.md ? 'c-minw-150' : undefined"
    />
  </q-form>
  <a v-else-if="external" :href="buttonLink">
    <base-button
      :text="buttonText"
      :bg="buttonBgColor"
      :fontColor="buttonFontColor"
      :min-width="$q.screen.lt.md ? 'c-minw-150' : undefined"
    />
  </a>
  <router-link v-else-if="buttonLink" :to="buttonLink">
    <base-button
      :text="buttonText"
      :bg="buttonBgColor"
      :fontColor="buttonFontColor"
      :min-width="$q.screen.lt.md ? 'c-minw-150' : undefined"
    />
  </router-link>
  <base-button
    v-else
    :text="buttonText"
    :bg="buttonBgColor"
    :fontColor="buttonFontColor"
    :min-width="$q.screen.lt.md ? 'c-minw-150' : undefined"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    post: {
      type: Boolean,
      default: false
    },
    external: {
      type: Boolean,
      default: false
    },
    buttonText: {
      type: String,
      required: true
    },
    buttonLink: {
      type: String
    },
    buttonBgColor: {
      type: String,
      default: 'white'
    },
    buttonFontColor: {
      type: String,
      default: 'warning'
    }
  }
});
</script>
