<template>
  <div :class="`landing-drawer ${drawerSizeClass}`">
    <q-drawer
      :value="value"
      dark
      :breakpoint="breakpoint"
      overlay
      content-class="bg-dark mainDrawer"
    >
      <div class="full-width row justify-end">
        <q-btn
          dense
          flat
          color="white"
          icon="mdi-close"
          size="md"
          class="q-pa-md"
          @click="$emit('invert-switch', !value)"
        />
      </div>

      <div v-if="value" id="drawer-menu-content">
        <drawer-content-mobile
          v-if="$q.screen.xs"
          :config="config"
          :expand="expand"
          :expanded="expanded"
        />

        <drawer-content-tablet
          v-if="$q.screen.sm"
          :config="config"
          @on-open-submenu="onOpenSubmenu"
        />

        <div class="q-px-lg q-pt-md">
          <q-separator color="grey-7" />
        </div>

        <q-btn class="font-14 w-600 q-ml-lg q-my-lg" no-caps outline>
          <a :href="forConsultants.link" class="q-py-xs q-px-md">
            {{ $t(forConsultants.name) }}
          </a>
        </q-btn>
      </div>

      <div
        id="drawer-end"
        class="bg-dark"
        :style="`margin-top:${drawerEndMarginTop}px`"
      >
        <i18n-switch
          :i18n-switch="i18nSwitch"
          color="white"
          @changeLanguage="$emit('change-language', $event, true)"
        />
        <div class="q-px-lg q-pt-md q-pb-xl">
          <q-separator color="grey-7" />
        </div>
        <div class="row justify-center q-pb-md">
          <a
            v-for="(social, i) in footer.social"
            :key="'soc' + i"
            class="q-mx-md"
            :href="social.link"
          >
            <img :src="social.icon" />
          </a>
        </div>
      </div>
    </q-drawer>
    <div
      v-if="drawerSubmenu && value"
      class="bg-white drawer-submenu drawer-submenu-from-left-animation text-black full-height shadow-3"
      :style="`left: ${mainDrawerWidth}px;`"
    >
      <drawer-submenu :config-item="drawerSubmenuContent" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useQuasar } from "quasar"
import DrawerContentMobile from './drawer/DrawerContentMobile.vue';
import DrawerContentTablet from './drawer/DrawerContentTablet.vue';
import DrawerSubmenu from './drawer/DrawerSubmenu.vue';
import { useToolbarConfig } from './landing-toolbar.hooks';
import { useFooterConfig } from './landing-footer.hooks';
import {
  useLandingDrawerConfig,
  useLandingDrawerDimensions
} from './drawer/landing-drawer.hooks';

export default defineComponent({
  name: 'LandingDrawer',
  components: { DrawerContentMobile, DrawerContentTablet, DrawerSubmenu },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    breakpoint: {
      type: Number
    },
    navHeight: {
      type: Number,
      default: 65
    },
    expand: {
      type: String,
      default: 'img:../icons/expand.svg'
    },
    expanded: {
      type: String,
      default: 'img:../icons/expanded.svg'
    }
  },
  setup() {
    const $q = useQuasar()
    const { config, forConsultants, i18nSwitch } = useToolbarConfig();
    const { config: footer } = useFooterConfig();
    const {
      onOpenSubmenu,
      drawerSubmenu,
      drawerSubmenuContent
    } = useLandingDrawerConfig(config);
    const {
      mainDrawerWidth,
      drawerEndMarginTop
    } = useLandingDrawerDimensions();

    function getTranslatedOptions(options: Array<string>) {
      return options.map((x: string) => root.$i18n.t(x));
    }

    const drawerSizeClass = computed(() => {
      if ( $q.screen.xs) return 'drawer-mobile';
      return 'drawer-tablet';
    });

    return {
      config,
      footer,
      forConsultants,
      getTranslatedOptions,
      i18nSwitch,
      mainDrawerWidth,
      drawerEndMarginTop,
      drawerSizeClass,
      onOpenSubmenu,
      drawerSubmenu,
      drawerSubmenuContent
    };
  }
});
</script>
