<template>
  <div class="q-mt-xl row justify-center">
    <landing-section-banner
      class="text-white col-11 col-lg-10"
      :text="text"
      :backgroundColor="backgroundColor"
      :fontColor="fontColor"
      :buttonBgColor="buttonBgColor"
      :buttonFontColor="buttonFontColor"
      :buttonText="buttonText"
      :buttonLink="buttonLink"
      :external="external"
      :post="post"
      :buttons="buttons"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { LandingSectionBannerButton } from '../../models';

export default defineComponent({
  name: 'DiscountBanner',
  props: {
    text: { type: String },
    fontColor: { type: String },
    backgroundColor: { type: String },
    buttonBgColor: { type: String },
    buttonFontColor: { type: String },
    buttonText: { type: String },
    buttonLink: { type: String },
    external: { type: Boolean },
    post: {
      type: Boolean,
      default: false
    },
    buttons: {
      type: (Array as unknown) as PropType<LandingSectionBannerButton>
    }
  }
});
</script>
