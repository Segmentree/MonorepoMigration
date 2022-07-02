<template>
  <q-layout view="lHh Lpr lff">
    <q-header class="bg-white">
      <landing-toolbar
        ref="toolbar"
        :drawer-switch="drawerSwitch"
        @invert-switch="invertSwitch"
        @changeLanguage="changeLanguage"
      />
    </q-header>
    <landing-drawer
      :breakpoint="breakpoint"
      :value="drawerSwitch"
      @invert-switch="invertSwitch"
      @change-language="changeLanguage"
    />
    <q-page-container>
      <router-view
        @changeState="changeState"
        @footer-loading="setFooterLoading"
      />
    </q-page-container>
    <landing-footer v-if="!footerLoading" />
  </q-layout>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  Ref,
  watch,
  PropType
} from 'vue';
import { useDrawerConfig, setMaskURL } from './landing-layout.hooks';
import { getURLsDictionary } from '@ligo/shared/storyblok';
import { urlByLocale } from '../tools';

const EN = ['en', 'en'];
const NL = ['nl'];

export default defineComponent({
  name: 'Layout',
  components: {},
  props: {
    locale: {
      type: (String as unknown) as PropType<'en' | 'nl'>
    }
  },
  setup(props, { root }) {
    const toolbar = ref(null);
    const redirectionOnLocalChange = ref(false);
    const footerLoading = ref(true);
    const redirectionUrl = ref('/');
    let changeLanguage;
    let checkPath;

    if (['nl', 'en'].includes(props.locale)) {
      root.$i18n.locale = props.locale;
      localStorage.setItem('locale', props.locale);
      root.$router.replace({
        path: root.$router.currentRoute.path,
        query: {}
      });
    }
    const { breakpoint, drawerSwitch } = useDrawerConfig();

    function invertSwitch(newValue: boolean) {
      drawerSwitch.value = newValue;
    }

    function changeState(newState: boolean, locale: string, url?: string) {
      setMaskURL(locale, root.$route.path, getURLsDictionary(root));
      if (url) redirectionUrl.value = url;
      redirectionOnLocalChange.value = newState;
      changeLanguage(locale == 'nl' ? 'nl' : 'en', false);
    }

    const stored = localStorage.getItem('locale');
    const lang = ref(stored ? stored : root.$i18n.locale) as Ref<'en' | 'nl'>;

    (changeLanguage = (language: 'en' | 'nl', emittedFromSwitch = false) => {
      lang.value = language;
      root.$i18n.locale = lang.value === 'en' ? 'en' : language;
      localStorage.setItem('locale', lang.value);
      if (emittedFromSwitch && redirectionOnLocalChange.value)
        root.$router.push(urlByLocale(redirectionUrl.value, root.$i18n.locale));
    })(lang.value);

    (checkPath = (path: string) => {
      if (path.startsWith('/' + EN[1]) && !EN.includes(lang.value)) {
        changeLanguage(EN[1]);
      } else if (!path.startsWith('/' + EN[1]) && !NL.includes(lang.value)) {
        changeLanguage(NL[0]);
      }
    })(root.$route.path);

    watch(
      () => root.$route.path,
      (newPath) => {
        checkPath(newPath);
      }
    );

    function setFooterLoading(newLoadingValue: boolean) {
      footerLoading.value = newLoadingValue;
    }

    return {
      breakpoint,
      drawerSwitch,
      changeState,
      invertSwitch,
      changeLanguage,
      toolbar,
      lang,
      setFooterLoading,
      footerLoading
    };
  }
});
</script>
