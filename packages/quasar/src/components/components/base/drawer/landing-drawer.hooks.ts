import { ref, Ref, ComputedRef, watch } from 'vue';
import { ToolbarConfigItem, ToolbarConfig } from '../../../models/index';
import Vue from 'vue';
import { useAwaitDOMNode } from '../../../tools';

const MAIN_DRAWER_CLASS_IDENTIFIER = '.mainDrawer';
const DRAWER_MENU_CONTENT_ID = '#drawer-menu-content';
const DRAWER_END_ID = '#drawer-end';

export function useLandingDrawerConfig(config: ComputedRef<ToolbarConfig>) {
  const drawerSubmenu = ref(false);
  const drawerSubmenuContent = ref() as Ref<ToolbarConfigItem>;

  function onOpenSubmenu(item: ToolbarConfigItem & { active: boolean }) {
    drawerSubmenu.value = false;
    if (item.active)
      Vue.nextTick(() => {
        drawerSubmenu.value = true;
        drawerSubmenuContent.value = item;
      });
  }

  watch(
    () => Vue['i18n'].locale,
    () => {
      if (drawerSubmenu.value)
        drawerSubmenuContent.value = config.value.items.find(
          (item) => item._uid === drawerSubmenuContent.value._uid
        );
    }
  );

  return { drawerSubmenu, onOpenSubmenu, drawerSubmenuContent };
}

export function useLandingDrawerDimensions() {
  const mainDrawerWidth = ref(0);
  const drawerEndMarginTop = ref(0);

  useAwaitDOMNode([
    MAIN_DRAWER_CLASS_IDENTIFIER,
    DRAWER_MENU_CONTENT_ID,
    DRAWER_END_ID
  ]).then(([mainDrawer, drawerContent, drawerEnd]) => {
    mainDrawerWidth.value = mainDrawer.getBoundingClientRect().width;

    const contentTop = drawerContent.getBoundingClientRect().top;
    const contentHeight = drawerContent.getBoundingClientRect().height;
    const height = window.innerHeight;
    const drawerEndHeight = drawerEnd.getBoundingClientRect().height;

    drawerEndMarginTop.value =
      height - contentTop - contentHeight - drawerEndHeight;
  });

  return { mainDrawerWidth, drawerEndMarginTop };
}
