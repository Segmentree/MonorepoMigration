<template>
  <div @mouseleave="switchSubmenu(null)">
    <q-toolbar
      id="landing-toolbar"
      :class="`q-pa-sm text-grey-14 toolbar z-max bg-white ${
        $q.screen.gt.sm && 'q-px-lg'
      }`"
    >
      <div
        :class="`row justify-${
          $q.screen.gt.sm ? 'center' : 'between'
        } items-center full-width`"
      >
        <div v-if="$q.screen.lt.md">
          <q-btn
            flat
            dense
            jest_data="drawer_menu"
            class="q-pa-xs"
            @click="$emit('invert-switch', !drawerSwitch)"
          >
            <q-img :src="config.menuIcon" class="flex-width-30" />
          </q-btn>
        </div>
        <div :class="`row ${$q.screen.lt.md && 'justify-center col-8'}`">
          <landing-link :href="HOME_URL">
            <q-item
              id="toolbar-first-element"
              clickable
              class="rounded-borders"
            >
              <img :src="config.logo" />
            </q-item>
          </landing-link>
        </div>
        <div v-if="$q.screen.gt.sm" class="col">
          <q-btn
            v-for="(item, i) in config.items"
            :key="i"
            class="font-14 w-600"
            padding="0px 0px 0px 0px"
            no-caps
            flat
            @mouseenter="switchSubmenu(item)"
          >
            <landing-link
              v-if="item.link"
              class="q-py-xs q-px-md"
              :href="item.link"
            >
              {{ item.name }}
            </landing-link>
            <div v-else class="q-py-xs q-px-md">
              {{ item.name }}
              <q-icon
                size="xs"
                :class="`rotate-half-from-${
                  isSectionOpen(item) ? 'down' : 'up'
                }`"
                :name="`mdi-chevron-${isSectionOpen(item) ? 'up' : 'down'}`"
              />
            </div>
          </q-btn>
        </div>
        <div v-if="$q.screen.gt.sm">
          <q-btn
            class="font-14 w-600"
            padding="0px 0px 0px 0px"
            no-caps
            rounded
            flat
          >
            <landing-link
              class="q-py-xs q-px-md"
              :href="advisorsEntrepreneursBtn.link"
            >
              {{ $t(advisorsEntrepreneursBtn.name) }}
            </landing-link>
          </q-btn>
        </div>
        <a href="/login">
          <q-btn flat no-caps class="font-16 w-700">{{ $t('login') }}</q-btn>
        </a>
        <div v-if="$q.screen.gt.sm" class="col-3 flex-width-105">
          <i18n-switch
            :i18n-switch="i18nSwitch"
            @changeLanguage="$emit('changeLanguage', $event, true)"
          />
        </div>
      </div>
    </q-toolbar>
    <transition-expand
      v-if="$q.screen.gt.sm"
      class="absolute full-width bg-white"
      :expanded="enableSubmenu"
      :object-to-watch="submenu"
      :shadow="3"
    >
      <toolbar-submenu :config-item="submenu" />
    </transition-expand>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useToolbarConfig } from './landing-toolbar.hooks';
import ToolbarSubmenu from './toolbar/ToolbarSubmenu.vue';
import { ToolbarConfigItem } from '../../models';

const ACCOUNTANTS_SLUG = 'accountants';
const ENTREPRENEURS_I18N = 'layout.toolbar.for_entrepreneurs';
const ENTREPRENEURS_EXTERNAL = false;

export default defineComponent({
  name: 'LandingToolbar',
  components: { ToolbarSubmenu },
  props: {
    drawerSwitch: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const route = useRoute()
    const {
      config,
      i18nSwitch,
      forConsultants,
      submenu,
      enableSubmenu,
      switchSubmenu,
      HOME_URL,
      selectedItemId
    } = useToolbarConfig();

    const advisorsEntrepreneursBtn = computed(() => {
      if (route.params.slug == ACCOUNTANTS_SLUG)
        return {
          name: ENTREPRENEURS_I18N,
          link: HOME_URL,
          external: ENTREPRENEURS_EXTERNAL
        };

      return forConsultants.value;
    });

    function isSectionOpen(item: ToolbarConfigItem) {
      return item._uid === selectedItemId.value && enableSubmenu.value;
    }

    return {
      config,
      submenu,
      switchSubmenu,
      i18nSwitch,
      HOME_URL,
      advisorsEntrepreneursBtn,
      enableSubmenu,
      selectedItemId,
      isSectionOpen
    };
  }
});
</script>
