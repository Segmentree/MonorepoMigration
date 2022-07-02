<template>
  <div class="row flex-center">
    <div
      :class="`col-11 col-md-9 q-mt-${marginTop} q-mb-${marginBottom} row items-center`"
    >
      <header-title
        v-if="title"
        class="w-600 full-width text-grey-14"
        :text="title"
        :center-on-desktop="centerTitleOnDesktop"
        :center-on-mobile="centerTitleOnMobile"
      />
      <subtitle
        v-if="subtitle"
        class="w-400 full-width text-grey-14 q-mt-sm"
        :text="subtitle"
        :center-on-desktop="centerSubtitleOnDesktop"
        :center-on-mobile="centerSubtitleOnMobile"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Subtitle from '../global/Subtitle.vue';
import HeaderTitle from '../global/HeaderTitle.vue';

export default defineComponent({
  name: 'SectionHeader',
  components: {
    HeaderTitle,
    Subtitle
  },
  props: {
    title: String,
    subtitle: String,
    marginTop: {
      type: String,
      default: 'xl'
    },
    marginBottom: {
      type: String,
      default: 'xl'
    },
    centerTitleOnDesktop: {
      type: Boolean,
      default: true
    },
    centerSubtitleOnDesktop: {
      type: Boolean,
      default: true
    },
    centerTitleOnMobile: {
      type: Boolean,
      default: false
    },
    centerSubtitleOnMobile: {
      type: Boolean,
      default: false
    }
  }
});
</script>
