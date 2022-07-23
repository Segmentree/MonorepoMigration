import { Ref } from "vue";
import {Composer, useI18n } from 'vue-i18n'
const i18n = useI18n()

export const textToLowerCase = (text: string) => {
  return text.toLowerCase();
};

export const forcedLanguage = (
  locale: string,
  i18n: Composer,
  emit: Function,
  url = '/',
  locales = ['nl', 'en-us', 'en']
) => {
  if (locales.includes(locale)) {
    i18n.locale.value = locale;
    localStorage.setItem('locale', locale);
    if (emit) emit('changeState', true, locale, url);
  } else {
    if (emit) emit('changeState', false, locale, url);
  }
};
