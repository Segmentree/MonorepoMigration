<template>
  <q-card
    :class="`bg-${dark && 'dark text-white'} text-center q-py-xl no-shadow`"
    bordered
  >
    <q-card-section class="s-membership-card q-pb-xl">
      <div class="w-500">
        <h4>{{ title }}</h4>
      </div>
      <div class="font-18 w-400">
        {{ subtitle }}
      </div>
      <div class="font-26 w-500 text-primary row justify-center">
        <reduction-label
          v-if="price"
          class="q-px-md"
          :left-string="price[0].leftString"
          :right-string="price[0].rightString"
          :dark="dark"
          font-size="22"
        />
        <div
          v-if="badge"
          class="bg-orange text-white font-14 w-500 s-membership-badge row items-center q-py-xs q-px-sm q-ml-sm"
        >
          {{ badge }}
        </div>
      </div>
      <div class="font-14 w-400 text-grey-2">
        {{ footText }}
      </div>
    </q-card-section>
    <q-card-actions class="justify-center">
      <div class="s-membership-btn">
        <q-form v-if="post" :action="buttonLink" method="post">
          <base-button
            bg="primary"
            font-color="white"
            :text="btnText"
            :full-width="false"
            type="submit"
          />
        </q-form>
        <a v-else-if="external" :href="buttonLink">
          <base-button
            bg="primary"
            font-color="white"
            :text="btnText"
            :full-width="false"
          />
        </a>
        <router-link v-else :to="buttonLink">
          <base-button
            bg="primary"
            font-color="white"
            :text="btnText"
            :full-width="false"
          />
        </router-link>
      </div>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import baseButton from '../base/BaseButton.vue';
import { StrikeThrough } from '../../models';

export default defineComponent({
  name: 'SimpleMembershipCard',
  components: {
    baseButton
  },
  props: {
    title: String,
    subtitle: String,
    dark: {
      type: Boolean,
      default: false
    },
    price: (Array as unknown) as PropType<StrikeThrough[]>,
    footText: String,
    btnText: String,
    badge: String,
    external: Boolean,
    post: Boolean,
    buttonLink: String
  }
});
</script>
