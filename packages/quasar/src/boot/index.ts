// import I18n from './i18n';
// import PDFViewer from '@quasar/quasar-app-extension-qpdfviewer/src/boot/qpdfviewer.js';
import { useEnvironment } from '../../../../netlify_functions';
import { storyblokBoot } from '../storyblook';

// COMMENT: I think its time to review this environment vars injection approach
const env = useEnvironment();

export const bootFiles = [
  storyblokBoot(env.STORYBLOK_TOKEN),
  // CompositionApi,
  // GTM
];
