import { Ref } from "vue";
import {useI18n } from 'vue-i18n'
const i18n = useI18n()

export const textToLowerCase = (text: string) => {
  return text.toLowerCase();
};

export const forcedLanguage = (
  root: any,
  locale: Ref<string>,
  url = '/',
  emit?: any,
  locales = ['nl', 'en-us', 'en']
) => {
  if (locales.includes(locale.value)) {
    // root.$i18n.locale = locale; COMMENT: Check use of this
    localStorage.setItem('locale', locale.value);
    if (emit) emit('changeState', true, locale.value, url);
  } else {
    if (emit) emit('changeState', false, locale.value, url);
  }
};
