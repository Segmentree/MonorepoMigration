<template>
  <q-footer id="landing-footer">
    <q-toolbar class="bg-dark w-500 no-padding">
      <div v-if="config" class="row justify-center full-width">
        <div class="col-11 col-md-10 q-py-lg row justify-between">
          <support-info
            v-for="(contact, i) in config.support"
            :id="`support-info-element-${i}`"
            :key="'contact-' + i"
            class="q-py-sm"
            v-bind="contact"
            @action="contact.action"
          />
        </div>
        <div :class="`col-${$q.screen.lt.md ? '11' : '12'} row justify-center`">
          <q-separator
            :color="`${!$q.screen.lt.md ? 'grey-14' : 'white'}`"
            class="full-width"
          />
        </div>
        <div class="col-11 col-md-10 q-py-xl font-14 w-400 row justify-between">
          <div
            v-for="(column, i) in config.columns"
            :id="'footer-column-' + i"
            :key="'column-' + i"
            :class="`q-py-sm ${
              $q.screen.lt.sm && 'row col-6 ' + (i > 1 ? 'q-mt-lg' : '')
            }`"
          >
            <div>
              <div v-if="!($q.screen.lt.sm && i === 1)" class="w-600 q-px-sm">
                <h5>{{ $t(column.title) }}</h5>
              </div>
              <br v-else />
              <q-item
                v-for="(item, j) in column.items"
                :key="'item-' + j"
                clickable
                class="q-px-sm q-py-sm"
              >
                <landing-link
                  v-if="item.link"
                  class="q-py-xs q-px-md"
                  :href="item.link"
                >
                  {{ $t(item.text) }}
                </landing-link>
                <div v-else>
                  {{ $t(item.text) }}
                </div>
                <q-badge
                  v-if="item.badge"
                  class="font-14 w-500 q-ml-sm q-px-md q-pt-xs badge"
                  color="orange"
                >
                  {{ $t(item.badge) }}
                </q-badge>
              </q-item>
            </div>
            <q-separator
              v-if="$q.screen.lt.sm && i === 0"
              vertical
              class="q-ml-xl"
              color="white"
            />
          </div>
        </div>
        <div v-if="$q.screen.lt.md" class="col-11 q-pb-lg">
          <q-separator color="white" class="full-width" />
        </div>
        <div
          name="banner"
          class="col-11 col-md-10 q-my-md row items-center justify-between"
        >
          <div :class="`${$q.screen.lt.md && 'col-12 row justify-between'}`">
            <img :src="'/svg/cards.svg'" />
            <div v-if="$q.screen.lt.md">
              <a
                v-for="(social, i) in config.social"
                :key="'soc' + i"
                class="q-mx-sm"
                :href="social.link"
              >
                <img :src="social.icon" />
              </a>
            </div>
          </div>
          <div
            :class="`col-12 col-md-7 row justify-between font-14 w-300 ${
              $q.screen.lt.md && 'q-mt-xl'
            }`"
          >
            <a href="https://www.ligo.nl/privacy" class="font-14 w-300 q-px-sm">
              {{ $t('layout.footer.privacy') }}
            </a>
            <a
              href="https://www.ligo.nl/disclaimer"
              class="font-14 w-300 q-px-sm"
            >
              {{ $t('layout.footer.disclaimer') }}
            </a>
            <a href="https://www.ligo.nl/terms" class="font-14 w-300 q-px-sm">
              {{ $t('layout.footer.terms') }}
            </a>
          </div>
          <div v-if="$q.screen.gt.sm">
            <a
              v-for="(social, i) in config.social"
              :key="'soc' + i"
              class="q-mx-sm"
              :href="social.link"
            >
              <img :src="social.icon" />
            </a>
          </div>
        </div>
      </div>
    </q-toolbar>
  </q-footer>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import SupportInfo from '../global/support_information/SupportInfo.vue';
import {
  useFooterConfig,
  useAlignmentFooterTools
} from './landing-footer.hooks';

export default defineComponent({
  name: 'LandingFooter',
  components: { SupportInfo },
  setup() {
    const { config } = useFooterConfig();
    useAlignmentFooterTools();
    return { config };
  }
});
</script>
