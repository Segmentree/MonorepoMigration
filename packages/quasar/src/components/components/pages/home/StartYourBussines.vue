<template>
  <div
    name="start-and-run-your-business"
    class="bg-dark font-12 section row justify-center q-py-md"
  >
    <div class="col-11 col-md-10 row">
      <div class="col-12 row justify-center items-center q-mb-xl">
        <div
          :class="`col-12 w-600 text-white q-py-lg ${
            $q.screen.lt.md ? '' : 'text-center'
          }`"
        >
          <h2>{{ title }}</h2>
        </div>
        <div
          :class="`col-12 w-400 text-grey-3 ${
            $q.screen.lt.md ? '' : 'text-center'
          }`"
        >
          <div class="s2">
            {{ subtitle }}
          </div>
        </div>
      </div>
      <div class="col-12 col-md-8 row justify-center items-center">
        <basic-you-tube-video
          v-if="!loading && !useImages"
          :video-url="active"
        />
        <q-card v-if="useImages" class="full-width">
          <img :src="active" />
        </q-card>
      </div>
      <div class="col-12 col-md-4 row">
        <div
          :class="{
            'full-width column justify-between': true,
            'q-pl-lg': $q.screen.gt.sm,
            'q-pt-md': $q.screen.lt.md
          }"
        >
          <div
            v-for="(button, i) in buttons"
            :key="i"
            :class="`col-4  ${
              i == 0 ? 'q-pb-sm' : 
              i == buttons.length - 1 ? 'q-pt-sm': 'q-py-xs'
            }`"
          >
            <q-btn
              no-caps
              outline
              color="grey"
              class="step-button full-width"
              @click="
                active = !useImages ? button.video_url : button.image.filename
              "
            >
              <div class="row">
                <img class="col-2" :src="button.icon.filename" />
                <div class="col-10 font-16 row items-center">
                  {{ button.key }}
                </div>
              </div>
            </q-btn>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="banner && banner[0]"
      class="col-12 col-sm-11 col-md-10 row justify-center items-center q-mt-xl"
    >
      <landing-section-banner
        class="text-white"
        :text="banner[0].text"
        background-color="#2A3554"
        font-color="white"
        button-bg-color="primary"
        button-font-color="white"
        :button-text="banner[0].button[0].key"
        :button-link="banner[0].button[0].link"
        :external="banner[0].button[0].external"
        :post="banner[0].button[0].post"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { MediaButton, SectionBanner } from '../../../models';
import BasicYouTubeVideo from '../../base/BasicYouTubeVideo.vue';

export default defineComponent({
  name: 'StartYourBussines',
  components: { BasicYouTubeVideo },
  props: {
    title: String,
    subtitle: String,
    buttons: (Array as unknown) as PropType<MediaButton[]>,
    banner: (Array as unknown) as PropType<SectionBanner[]>,
    useImages: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      active: this.useImages
        ? this.buttons[0].image.filename
        : this.buttons[0].video_url,
      loading: false
    };
  },
  watch: {
    active() {
      this.loading = true;
      this.$nextTick(() => {
        this.loading = false;
      });
    }
  }
});
</script>
