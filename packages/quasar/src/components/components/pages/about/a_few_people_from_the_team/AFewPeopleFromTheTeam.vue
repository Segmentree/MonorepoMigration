<template>
  <div class="section row justify-center">
    <div class="col-11 col-md-10">
      <div>
        <div
          id="top-element"
          class="q-mb-xl scroll-top text-grey-14 w-600 font-30 text-center"
        >
          {{ title }}
        </div>
        <div class="row justify-center">
          <div class="col-12 col-lg-10">
            <div v-if="$q.screen.gt.xs" class="row justify-center">
              <div class="col-12">
                <div v-if="seeMore">
                  <team-section
                    v-for="(key, i) in Object.keys(sections)"
                    :key="i"
                    :subtitle="key === DEFAULT_SUBTITLE ? '-' : key"
                    :cards="sections[key]"
                    class="q-mb-md"
                  />
                </div>
                <team-section
                  v-else
                  :subtitle="firstSubtitle"
                  :cards="sections[firstSubtitle].slice(0, VIP_COUNT * vipRows)"
                />
              </div>

              <span
                class="text-purple w-500 font-18 cursor-pointer"
                @click="clickSeeButton"
                v-text="
                  seeMore ? $t('about.team.seeLess') : $t('about.team.seeMore')
                "
              />
            </div>

            <div v-if="$q.screen.xs">
              <team-carousel
                v-for="(key, i) in Object.keys(sections)"
                :key="i"
                :subtitle="key === DEFAULT_SUBTITLE ? '-' : key"
                :cards="sections[key]"
                class="q-mb-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="col-12 col-sm-11 col-md-10 row justify-center items-center q-mt-xl"
    >
      <landing-section-banner
        v-if="footBanner && footBanner[0]"
        class="text-white"
        :text="footBanner[0].text"
        background-color="#2A3554"
        font-color="white"
        button-bg-color="white"
        button-font-color="dark"
        :button-text="footBanner[0].button[0].key"
        :button-link="footBanner[0].button[0].link"
        :external="footBanner[0].button[0].external"
        :post="footBanner[0].button[0].post"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import TeamCarousel from './TeamCarousel.vue';
import TeamSection from './TeamSection.vue';
import { TeamCardsListComponent, SectionBanner } from '../../../../models';
import { useAFewPeopleFromTheTeam } from './a-few-people-from-the-team.hooks';

const DEFAULT_SUBTITLE = '-';
const VIP_COUNT = 3;

export default defineComponent({
  name: 'AFewPeopleFromTheTeam',
  components: { TeamCarousel, TeamSection },
  props: {
    title: {
      type: String,
      required: true
    },
    cards: {
      type: (Array as unknown) as PropType<TeamCardsListComponent[]>,
      required: true
    },
    footBanner: (Array as unknown) as PropType<SectionBanner>,
    vipRows: {
      type: String,
      default: '1'
    }
  },
  setup(props) {
    const { seeMore, sections, firstSubtitle } = useAFewPeopleFromTheTeam(
      DEFAULT_SUBTITLE,
      props.cards
    );

    function clickSeeButton() {
      if (seeMore.value) {
        document
          .getElementById('top-element')
          .scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      seeMore.value = !seeMore.value;
    }

    return {
      sections,
      seeMore,
      firstSubtitle,
      clickSeeButton,
      DEFAULT_SUBTITLE,
      VIP_COUNT
    };
  }
});
</script>
