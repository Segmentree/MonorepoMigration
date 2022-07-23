import { apiPlugin } from '@storyblok/vue';
import { useEnvironment } from '../../../../netlify_functions';
import Page from '../components/Page.vue';
import Grid from '../components/Grid.vue';
import { Hash } from './models';
import { App } from 'vue';

const API_TOOLBAR_URL = (locale: 'en' | 'nl') =>
  `cdn/stories/tools/_toolbar_/?language=${locale}`;

let enDictionary: any;
let nlDictionary: any;
let reverseEnDictionary: any;
let addEnglishPrefixList: any;

// function serializeHashBlok(data: Hash) {
//   const { EN, NL, addEnglishPrefix } = data.story.content.body[0];
//   EN.forEach((entry: any) => {
//     enDictionary[entry.aliasUrl] = entry.originalUrl;
//     reverseEnDictionary[entry.originalUrl] = entry.aliasUrl;
//   });
//   NL.forEach((entry: any) => {
//     nlDictionary[entry.aliasUrl] = entry.originalUrl;
//   });
//   addEnglishPrefix.forEach((entry: any) => {
//     addEnglishPrefixList.push(entry.text);
//   });
// }

// function getToolbarConfig(storyapi: StoryblokClient, locale: 'en' | 'nl') {
//   return new Promise((resolve) => {
//     storyapi
//       .get(`${API_TOOLBAR_URL(locale)}`, {
//         version: 'published'
//       })
//       .then((res: any) => {
//         const storyblokToolbarConfig = res.data.story.content.body[0];
//         resolve(storyblokToolbarConfig);
//       })
//       .catch((e: any) => {
//         console.log(e);
//       });
//   });
// }

// export const storyblokBoot = (vue: App, accessToken: string) => {
//   enDictionary = {};
//   nlDictionary = {};
//   reverseEnDictionary = {};
//   addEnglishPrefixList = [];

//   return boot(async ({ Vue }) => {
//     Vue.use(StoryblokVue);

//     install(Vue, [Page, Grid]);

//     const storyapi = new StoryblokClient({
//       accessToken
//     });

//     await storyapi
//       .get('cdn/stories/tools/urls/?language=nl', {
//         version: 'published'
//       })
//       .then(({ data }: any) => {
//         serializeHashBlok(data);
//       })
//       .catch((e: any) => {
//         console.log(e);
//       });

//     Vue['$landing-toolbar'] = {
//       en: await getToolbarConfig(storyapi, 'en'),
//       nl: await getToolbarConfig(storyapi, 'nl')
//     };

//     Vue.prototype.$storyapi = storyapi;
//     Vue.prototype.$alias = {
//       enDictionary: EnDictionary,
//       nlDictionary: NlDictionary,
//       reverseEnDictionary: reverseEnDictionary
//     };

//     Vue['$storyapi'] = storyapi;
//     Vue['$alias'] = {
//       enDictionary: EnDictionary,
//       nlDictionary: NlDictionary,
//       reverseEnDictionary: reverseEnDictionary,
//       addEnglishPrefixList: addEnglishPrefixList
//     };

//     window.storyblok.init({
//       accessToken
//     });
//   });
// };

const env = useEnvironment();

export const storyblokConfig = {
  accessToken: env.STORYBLOK_TOKEN,
  bridge: process.env.NODE_ENV !== 'production', // optimizes by excluding the bridge on production
  use: [apiPlugin],
}