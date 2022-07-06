/// COMMENT: Wont be migrating this in the sandbox cuz theres a different Vue3-ready lib

// import VueGtm from '@gtm-support/vue2-gtm';
// import { boot } from 'quasar/wrappers';

// import { useEnvironment } from '../../../../netlify_functions';

// export default boot(({ Vue }) => {
//   Vue.use(VueGtm, {
//     id: useEnvironment().GTM_ID, // Your GTM single container ID, array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryParams: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}], // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']
//     defer: false, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
//     compatibility: true, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
//     // nonce: '2726c7f26c', // Will add `nonce` to the script tag
//     enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
//     debug: process.env.NODE_ENV === 'development', // Whether or not display console logs debugs (optional)
//     loadScript: true // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
//   });
// });
