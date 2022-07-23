<template>
  <q-card
    flat
    bordered
    :class="`full-height q-pa-sm ${
      popular ? 'popular-service-card text-white' : 'text-dark'
    }`"
  >
    <div class="font-18 text-white popular-tag">
      {{ 'home.services.popular' }}
    </div>
    <q-card-section>
      <div class="row q-mt-md q-pl-md" style="margin-left: -12px">
        <div class="col-3">
          <q-img :src="icon" />
        </div>
      </div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="row items-center q-pl-md">
        <div class="row w-600 q-py-sm">
          <h4>{{ title }}</h4>
        </div>
        <div v-if="popular" class="q-pa-sm">
          <q-btn
            size="sm"
            dense
            flat
            class="bg-orange font-12 w-600 q-px-xs"
            style="height: 20px"
          >
            <div style="margin-top: -4px">
              {{ discount }}
            </div>
          </q-btn>
        </div>
      </div>
    </q-card-section>
    <q-card-section class="q-pt-none c-mb-150">
      <ul class="w-400 q-px-md">
        <li class="q-my-sm" v-for="(feature, i) in features" :key="i">
          <div class="t3">{{ feature.text }}</div>
        </li>
      </ul>
    </q-card-section>
    <q-card-actions class="absolute-bottom q-mb-sm q-px-lg row">
      <div class="text-primary w-600 q-py-sm q-px-lg">
        <h4>{{ price }}</h4>
      </div>

      <a class="full-width" v-if="button.external" :href="button.link">
        <base-button class="full-width" :text="button.key" bg="primary" />
      </a>
      <router-link
        class="full-width"
        v-else-if="button.link"
        :to="{ name: button.link }"
      >
        <base-button class="full-width" :text="button.key" bg="primary" />
      </router-link>
      <base-button
        v-else
        class="full-width"
        :text="button.key"
        bg="primary"
        @btn-click="$emit(button.emit)"
      />
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Button } from '../../../models/global-types/global-types';
import BaseButton from '../../base/BaseButton.vue';

export default defineComponent({
  components: { BaseButton },
  name: 'ServiceCard',
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    features: {
      type: Array as unknown as PropType<string[]>,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    button: {
      type: (Object as unknown) as PropType<Button>,
      required: true
    },
    popular: {
      type: Boolean,
      default: false
    },
    discount: {
      type: String,
      default: ''
    }
  }
});
</script>
