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
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'
import { useDrawerConfig, setMaskURL } from './landing-layout.hooks';
import { urlByLocale } from '../tools';
import { getURLsDictionary } from '../../storyblook';


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
  setup(props) {
    const i18n = useI18n()
    const router = useRouter()
    const route = useRoute()
    const toolbar = ref(null);
    const redirectionOnLocalChange = ref(false);
    const footerLoading = ref(true);
    const redirectionUrl = ref('/');
    let changeLanguage;
    let checkPath;

    if (['nl', 'en'].includes(props.locale)) {
      i18n.locale.value = props.locale;
      localStorage.setItem('locale', props.locale);
      router.replace({
        path: router.currentRoute.value.path,
        query: {}
      });
    }
    const { breakpoint, drawerSwitch } = useDrawerConfig();

    function invertSwitch(newValue: boolean) {
      drawerSwitch.value = newValue;
    }

    function changeState(newState: boolean, locale: string, url?: string) {
      setMaskURL(locale, route.path, getURLsDictionary(root));
      if (url) redirectionUrl.value = url;
      redirectionOnLocalChange.value = newState;
      changeLanguage(locale == 'nl' ? 'nl' : 'en', false);
    }

    const stored = localStorage.getItem('locale');
    const lang = ref(stored ? stored : i18n.locale.value) as Ref<'en' | 'nl'>;

    (changeLanguage = (language: 'en' | 'nl', emittedFromSwitch = false) => {
      lang.value = language;
      i18n.locale.value = lang.value === 'en' ? 'en' : language;
      localStorage.setItem('locale', lang.value);
      if (emittedFromSwitch && redirectionOnLocalChange.value)
        router.push(urlByLocale(redirectionUrl.value, i18n.locale.value));
    })(lang.value);

    (checkPath = (path: string) => {
      if (path.startsWith('/' + EN[1]) && !EN.includes(lang.value)) {
        changeLanguage(EN[1]);
      } else if (!path.startsWith('/' + EN[1]) && !NL.includes(lang.value)) {
        changeLanguage(NL[0]);
      }
    })(route.path);

    watch(
      router.currentRoute,
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
