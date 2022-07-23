import StoryblokClient from 'storyblok-js-client';
import StoryblokVue from 'storyblok-vue';
import { install, Dictionary } from '@ligo/shared/utils';
import { boot } from 'quasar/wrappers';
import { Hash } from '../../';

import Page from '../components/Page.vue';
import Grid from '../components/Grid.vue';

const API_TOOLBAR_URL = (locale: 'en' | 'nl') =>
  `cdn/stories/tools/_toolbar_/?language=${locale}`;

let EnDictionary: Dictionary;
let NlDictionary: Dictionary;
let reverseEnDictionary: Dictionary;
let addEnglishPrefixList: Dictionary;

function serializeHashBlok(data: Hash) {
  const { EN, NL, addEnglishPrefix } = data.story.content.body[0];
  EN.forEach((entry) => {
    EnDictionary[entry.aliasUrl] = entry.originalUrl;
    reverseEnDictionary[entry.originalUrl] = entry.aliasUrl;
  });
  NL.forEach((entry) => {
    NlDictionary[entry.aliasUrl] = entry.originalUrl;
  });
  addEnglishPrefix.forEach((entry) => {
    addEnglishPrefixList.push(entry.text);
  });
}

function getToolbarConfig(storyapi: StoryblokClient, locale: 'en' | 'nl') {
  return new Promise((resolve) => {
    storyapi
      .get(`${API_TOOLBAR_URL(locale)}`, {
        version: 'published'
      })
      .then((res: any) => {
        const storyblokToolbarConfig = res.data.story.content.body[0];
        resolve(storyblokToolbarConfig);
      })
      .catch((e: any) => {
        console.log(e);
      });
  });
}

export const storyblokBoot = (accessToken: string) => {
  EnDictionary = {};
  NlDictionary = {};
  reverseEnDictionary = {};
  addEnglishPrefixList = [];

  return boot(async ({ Vue }) => {
    Vue.use(StoryblokVue);

    install(Vue, [Page, Grid]);

    const storyapi = new StoryblokClient({
      accessToken
    });

    await storyapi
      .get('cdn/stories/tools/urls/?language=nl', {
        version: 'published'
      })
      .then(({ data }: any) => {
        serializeHashBlok(data);
      })
      .catch((e: any) => {
        console.log(e);
      });

    Vue['$landing-toolbar'] = {
      en: await getToolbarConfig(storyapi, 'en'),
      nl: await getToolbarConfig(storyapi, 'nl')
    };

    Vue.prototype.$storyapi = storyapi;
    Vue.prototype.$alias = {
      enDictionary: EnDictionary,
      nlDictionary: NlDictionary,
      reverseEnDictionary: reverseEnDictionary
    };

    Vue['$storyapi'] = storyapi;
    Vue['$alias'] = {
      enDictionary: EnDictionary,
      nlDictionary: NlDictionary,
      reverseEnDictionary: reverseEnDictionary,
      addEnglishPrefixList: addEnglishPrefixList
    };

    window.storyblok.init({
      accessToken
    });
  });
};
