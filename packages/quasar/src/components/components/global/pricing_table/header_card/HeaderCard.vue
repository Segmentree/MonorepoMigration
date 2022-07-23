<template>
  <q-card
    flat
    :bordered="!active"
    :class="`bg-${active ? 'dark' : 'grey-3'} q-pa-md ${
      active && 'table-header-card'
    }`"
  >
    <div v-if="active" class="corner-text">{{ activeText }}</div>
    <q-card-section
      :class="`w-600 text-center text-${active ? 'white' : 'grey-14'}`"
    >
      <h5>{{ title }}</h5>
    </q-card-section>
    <q-card-actions class="row justify-center">
      <q-btn
        size="lg"
        :class="`full-width border text-black ${!active && 'table-header-btn'}`"
        no-caps
        unelevated
        :color="active ? 'primary' : 'white'"
        @click="navigate"
      >
        <div :class="`t3 w-600 text-${active ? 'white' : 'grey-14'}`">
          {{ btnLabel }}
        </div>
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HeaderCard',
  props: {
    title: String,
    link: String,
    btnLabel: String,
    active: Boolean,
    activeText: String,
    external: Boolean
  },
  methods: {
    navigate() {
      if (this.link) {
        if (this.external) window.location = this.link;
        else this.$router.push(this.link);
      }
    }
  }
});
</script>
