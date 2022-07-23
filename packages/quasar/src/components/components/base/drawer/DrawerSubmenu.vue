<template>
  <div>
    <div id="submenu-content" class="q-pa-xl">
      <div
        v-for="(subitem, i) in configItem.subitems"
        :key="`subitem-${i}`"
        class="q-mb-md"
      >
        <div class="row">
          <q-icon size="md" :name="`img:${subitem.icon}`" />
          <div class="col-10 font-14 q-pl-md w-500">
            <div class="text-overline text-uppercase font-14">
              {{ subitem.name }}
            </div>
            <div
              v-for="(subitemLink, j) in subitem.links"
              :key="`subitemLink-${j}`"
              class="w-400 q-my-sm"
            >
              <a :href="subitemLink.link">
                {{ subitemLink.text }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="configItem.submenuBanner"
      class="bg-purple-1 row items-center q-py-lg q-px-sm q-my-lg"
      :style="`max-width: ${maxWidth}px;`"
    >
      <div class="col-4">
        <img class="full-width" :src="configItem.submenuBanner.img" />
      </div>
      <div class="col-8 q-pl-lg w-400">
        <div class="font-14 w-600 text-black text-overline text-uppercase">
          {{ configItem.submenuBanner.title }}
        </div>
        <div class="font-18 q-py-md">
          {{ configItem.submenuBanner.subtitle }}
        </div>
        <div v-if="configItem.submenuBanner.cta" class="font-20 text-black">
          <a :href="configItem.submenuBanner.cta.url">
            {{ configItem.submenuBanner.cta.text }}
          </a>
          <span><q-icon name="mdi-arrow-right" /></span>
        </div>
        <div v-else-if="configItem.submenuBanner.phone" class="w-600 font-20">
          <submenu-banner-phone :phone="configItem.submenuBanner.phone" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { ToolbarConfigItem } from '../../../models/index';
import { useAwaitDOMNode } from '../../../tools';
import SubmenuBannerPhone from '../toolbar/SubmenuBannerPhone.vue';

const SUBMENU_CONTENT_ID = '#submenu-content';

export default defineComponent({
  name: 'DrawerSubmenu',
  components: { SubmenuBannerPhone },
  props: {
    configItem: {
      type: Object as PropType<ToolbarConfigItem>,
      required: true
    }
  },
  setup() {
    const maxWidth = ref(0);
    useAwaitDOMNode([SUBMENU_CONTENT_ID]).then(([submenuContent]) => {
      maxWidth.value = submenuContent.getBoundingClientRect().width;
    });

    return {
      maxWidth
    };
  }
});
</script>
