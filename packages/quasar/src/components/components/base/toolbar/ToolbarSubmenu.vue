<template>
  <div class="row justify-end">
    <div
      id="submenu-sections"
      :style="`width: ${width}px;`"
      class="text-black row"
    >
      <div class="q-py-xl col row">
        <div
          v-for="(item, i) in configItem.subitems"
          :key="`item-${i}`"
          :class="`q-pr-${i != configItem.subitems.length - 1 && 'xl '}`"
        >
          <div class="row">
            <q-icon :size="sectionIconSize" :name="`img:${item.icon}`" />
            <div class="q-pl-md">
              <div class="font-14 text-uppercase w-600 text-overline">
                {{ item.name }}
              </div>
              <div class="font-14 w-400">
                <div
                  v-for="(obj, j) in item.links"
                  :key="`link-${j}`"
                  class="q-my-sm"
                >
                  <landing-link
                    :class="`hover-ligo-grey-hover q-py-xs q-px-sm border-radius-10 submenu-link ${
                      obj.highlight && 'text-black w-600'
                    }`"
                    :href="obj.link"
                  >
                    {{ obj.text }}
                  </landing-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="configItem.submenuBanner"
        class="bg-purple-1 row items-center justify-between q-py-xl q-px-lg toolbar-submenu-banner"
      >
        <div class="col-5 row justify-center">
          <img
            class="submenu-image-frame full-width"
            :src="configItem.submenuBanner.img"
          />
        </div>
        <div class="col-7 q-pl-lg w-400">
          <div class="font-14 w-600 text-black text-overline text-uppercase">
            {{ configItem.submenuBanner.title }}
          </div>
          <div class="font-16 text-grey-10 q-py-md">
            {{ configItem.submenuBanner.subtitle }}
          </div>
          <div
            :class="`font-20 text-${
              configItem.submenuBanner.actionColor
                ? configItem.submenuBanner.actionColor
                : 'grey-14'
            }`"
          >
            <div v-if="configItem.submenuBanner.cta">
              <landing-link :href="configItem.submenuBanner.cta.url">
                {{ configItem.submenuBanner.cta.text }}
                <span><q-icon name="mdi-arrow-right" /></span>
              </landing-link>
            </div>
            <div v-else-if="configItem.submenuBanner.phone" class="w-600">
              <submenu-banner-phone :phone="configItem.submenuBanner.phone" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ToolbarConfigItem } from '../../../models';
import { getContainerWidth } from './toolbar-submenu.hooks';
import SubmenuBannerPhone from './SubmenuBannerPhone.vue';

export default defineComponent({
  name: 'ToolbarSubmenu',
  components: { SubmenuBannerPhone },
  props: {
    configItem: Object as PropType<ToolbarConfigItem>,
    sectionIconSize: {
      type: String,
      default: 'md'
    }
  },
  setup() {
    const { width } = getContainerWidth();
    return { width };
  }
});
</script>
