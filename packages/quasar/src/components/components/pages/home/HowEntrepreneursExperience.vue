<template>
  <div
    name="entrepeneurs-experience-ligo"
    class="text-white section row justify-center"
  >
    <div class="col-11 col-md-10 row">
      <div
        :class="`col-12 row items-center ${
          $q.screen.lt.md ? 'text-left' : 'justify-center text-center'
        }`"
      >
        <div class="col-12 w-600 text-grey-14">
          <h2>{{ title }}</h2>
        </div>
        <div class="col-12 w-400 text-grey-14 q-my-sm">
          <div class="s2">
            {{ subtitle }}
          </div>
        </div>
      </div>
      <div class="col-12 row justify-center q-mt-xl">
        <div
          :class="`col-${
            $q.screen.lt.md ? '12 q-py-md' : '6 justify-end q-pa-md'
          } row justify-center`"
        >
          <basic-you-tube-video :video-url="videoLink[0].url" />
        </div>
        <div
          :class="`col-${
            $q.screen.lt.md ? '12 q-py-md' : '6 q-pa-md'
          } row justify-center`"
        >
          <carousel class="full-width" :slides="carousel.length">
            <template v-for="(slide, i) in carousel" #[`slide-${i+1}`]>
              <!--eslint-disable-next-line vue/require-v-for-key-->
              <div class="full-width row justify-center text-center">
                <div class="col-12 q-my-md">
                  <q-img :src="slide.img.filename" class="flex-width-70" />
                </div>
                <div class="col-12 w-600">
                  <h4>{{ slide.title }}</h4>
                </div>
                <div class="col-12 t2 text-grey-1 q-mb-lg">
                  {{ slide.subtitle }}
                </div>
                <div class="col-12 t0 text-grey-14">
                  {{ slide.text }}
                </div>
              </div>
            </template>
          </carousel>
        </div>
      </div>
      <div class="col-12 row justify-center items-center q-my-md">
        <rating-banner
          class="c-bradius-10"
          :score="Number(ranking_score)"
          :via="'kiyoh'"
          :reviews="Number(ranking_reviews)"
          :color="`dark`"
          :default_clases="false"
          :show-score="true"
          text_color="white"
        />
      </div>
    </div>
    <div class="col-12 row">
      <div class="col-12">
        <logos-banner
          :margin_bottom="0"
          :margin_top="80"
          :banner-src="footBanner[0].src.filename"
          :banner-mobile="
            footBanner[0].mobile ? footBanner[0].mobile.filename : undefined
          "
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import LogosBanner from '../../global/logos_banner/LogosBanner.vue';
import Carousel from '../../global/carousel/Carousel.vue';
import BasicYouTubeVideo from '../../base/BasicYouTubeVideo.vue';
import { Slide, Video, SubBanner } from '../../../models';

export default defineComponent({
  name: 'HowEntrepreneursExperience',
  components: { LogosBanner, Carousel, BasicYouTubeVideo },
  props: {
    title: String,
    subtitle: String,
    carousel: (Array as unknown) as PropType<Slide[]>,
    videoLink: (Array as unknown) as PropType<Video[]>,
    footBanner: (Array as unknown) as PropType<SubBanner[]>,
    ranking_reviews: { type: String, default: '190' },
    ranking_score: { type: String, default: '8.4' }
  }
});
</script>
