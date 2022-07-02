<template>
  <div class="drawer-content">
    <div class="text-white font-18 w-600">
      <q-list>
        <template v-for="(item, i) in config.items">
          <div v-if="item.link" :key="`item-a-${i}`" class="q-mt-md">
            <a class="border-radius-10 q-ml-lg" :href="item.link">
              {{ item.name }}
            </a>
          </div>
          <q-expansion-item
            v-else
            :key="`item-expansion-${i}`"
            :content-inset-level="0"
            :expand-icon="expand"
            :expanded-icon="expanded"
            expand-icon-class="small-icon q-px-sm"
            header-class="q-py-none q-mt-md"
          >
            <template #header>
              <a class="q-ml-lg q-mr-sm">
                {{ item.name }}
              </a>
            </template>

            <div
              v-for="(subitem, j) in item.subitems"
              :key="j"
              class="q-mb-md q-ml-lg q-mt-lg"
            >
              <div class="row">
                <q-icon size="sm" :name="`img:${subitem.icon}`" />
                <div
                  class="col-10 q-ml-sm font-16 w-500 text-white text-uppercase text-overline"
                >
                  {{ subitem.name }}
                </div>
              </div>
              <div
                v-for="(obj, k) in subitem.links"
                :key="`obj-${k}`"
                class="q-ml-lg q-my-sm"
              >
                <a
                  class="font-16 text-white w-400 hover-ligo-grey border-radius-10 q-pa-sm"
                  :href="obj.link"
                >
                  {{ obj.text }}
                </a>
              </div>
            </div>
            <div
              v-if="item.submenuBanner"
              class="bg-grey-12 q-py-lg q-px-xs q-my-lg row items-center"
            >
              <div class="col-5">
                <img class="full-width" :src="item.submenuBanner.img" />
              </div>
              <div class="col-7 q-pl-lg w-400">
                <div class="font-14 text-overline text-uppercase">
                  {{ item.submenuBanner.title }}
                </div>
                <div class="font-18 q-py-md">
                  {{ item.submenuBanner.subtitle }}
                </div>
                <div v-if="item.submenuBanner.cta" class="font-20 text-white">
                  <a :href="item.submenuBanner.cta.url">
                    {{ item.submenuBanner.cta.text }}
                  </a>
                  <span><q-icon name="mdi-arrow-right" /></span>
                </div>
                <div v-else-if="item.submenuBanner.phone" class="w-600">
                  <submenu-banner-phone :phone="item.submenuBanner.phone" />
                </div>
              </div>
            </div>
          </q-expansion-item>
        </template>
      </q-list>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ToolbarConfig } from '../../../models/index';
import SubmenuBannerPhone from '../toolbar/SubmenuBannerPhone.vue';

export default defineComponent({
  name: 'DrawerContentMobile',
  components: { SubmenuBannerPhone },
  props: {
    config: {
      type: Object as PropType<ToolbarConfig>,
      required: true
    },
    expand: {
      type: String,
      required: true
    },
    expanded: {
      type: String,
      required: true
    }
  }
});
</script>
