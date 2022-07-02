import { computed, ref } from 'vue';
import {
  ToolbarConfigItem,
  StoryblokToolbarConfigItem,
  StoryblokToolbarSubmenuBanner,
  StoryblokToolbarConfig
} from '../../models';
import { byLocale, Locale } from '../../models/layout/locale.helpers';
import Vue from 'vue';

const HOME_URL = '/';

const toToolbarSubmenuBanner = (
  submenuBanner: StoryblokToolbarSubmenuBanner
) => ({
  ...submenuBanner,
  cta: submenuBanner.cta ? submenuBanner.cta[0] : undefined,
  phone:
    submenuBanner.phone && submenuBanner.phone[0]
      ? {
          ...submenuBanner.phone[0],
          icon: submenuBanner.phone[0].icon?.filename
        }
      : undefined,
  img: submenuBanner.img ? submenuBanner.img.filename : undefined
});

const toToolbarConfigItem = (locale: Locale) => (
  item: StoryblokToolbarConfigItem
) => ({
  ...item,
  subitems: item.subitems
    ? item.subitems
        .map((subitem) => ({
          ...subitem,
          icon: subitem.icon ? subitem.icon.filename : undefined,
          links: subitem.links.filter(byLocale(locale))
        }))
        .filter((subitem) => !!subitem.links.length)
    : undefined,
  submenuBanner:
    item.submenuBanner && item.submenuBanner[0]
      ? toToolbarSubmenuBanner(item.submenuBanner[0])
      : undefined
});

const byAtLeastALinkMenu = (item: ToolbarConfigItem) => {
  if (!item.subitems || item.link) {
    return true;
  }
  return item.subitems.length;
};

export function useToolbarConfig() {
  const enableSubmenu = ref(false);
  const selectedItemId = ref();

  const configEn = Vue['$landing-toolbar'].en as StoryblokToolbarConfig;
  const configNl = Vue['$landing-toolbar'].nl as StoryblokToolbarConfig;

  const config = computed(() => {
    const locale = Vue['i18n'].locale;
    const currentConfig = locale === 'en' ? configEn : configNl;
    return {
      ...currentConfig,
      logo: currentConfig.logo.filename,
      menuIcon: currentConfig.menuIcon.filename,
      items: currentConfig.items
        .map(toToolbarConfigItem(locale))
        .filter(byAtLeastALinkMenu)
    };
  });

  selectedItemId.value = config.value.items[0]._uid;

  const submenu = computed(() => {
    return config.value.items.find(
      (item) => item._uid === selectedItemId.value
    );
  });

  function switchSubmenu(item: ToolbarConfigItem) {
    if (item && item.subitems) selectedItemId.value = item._uid;
    Vue.nextTick(() => {
      enableSubmenu.value = Boolean(item?.subitems?.length > 0);
    });
  }

  const forConsultants = ref({
    name: 'layout.toolbar.for_consultants_opt1',
    link: '/accountants'
  });

  const i18nSwitch = computed(() => {
    const language = Vue['i18n'].locale;
    return {
      en: {
        active: language === 'en',
        language: 'layout.en'
      },
      nl: {
        active: language === 'nl',
        language: 'layout.nl'
      }
    };
  });

  return {
    submenu,
    enableSubmenu,
    switchSubmenu,
    config,
    i18nSwitch,
    forConsultants,
    HOME_URL,
    selectedItemId
  };
}
