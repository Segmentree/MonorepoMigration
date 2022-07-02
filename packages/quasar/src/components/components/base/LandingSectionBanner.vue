<template>
  <div :class="{ 'row flex-center': true, 'section ': section }">
    <div
      :class="{
        'section-banner': true,
        'row justify-center': flex,
        'col-11': section
      }"
    >
      <div
        :class="`row border items-center q-pa-lg ${customClass}`"
        :style="'background-color: ' + backgroundColor"
      >
        <div
          v-if="icon && icon.filename"
          :style="{ 'margin-left: -21px': $q.screen.sm }"
        >
          <div class="row justify-center">
            <q-img :src="icon.filename" class="section-banner-img" />
          </div>
        </div>
        <div
          :class="`q-mb-md q-mt-md flex flex-1 w-600 font-${
            $q.screen.gt.sm ? '28' : '24'
          }`"
        >
          <h3 :class="`text-${fontColor}`">
            {{ text }}
          </h3>
        </div>

        <div class="row">
          <nav-button
            v-for="(button, i) in buttonList"
            :key="button._uid || i"
            class="q-ml-md"
            v-bind="button"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import NavButton from './NavButton.vue';
import { LandingSectionBannerButton } from '../../models';

export default defineComponent({
  name: 'LandingSectionBanner',
  components: { NavButton },
  props: {
    icon: {
      type: Object as PropType<{ filename: string }>
    },
    text: {
      type: String,
      required: true
    },
    fontColor: {
      type: String,
      default: 'white'
    },
    backgroundColor: {
      type: String,
      default: 'warning'
    },
    buttonText: {
      type: String,
      required: true
    },
    post: {
      type: Boolean,
      default: false
    },
    external: {
      type: Boolean,
      default: false
    },
    buttonLink: {
      type: String
    },
    buttonBgColor: {
      type: String,
      default: 'white'
    },
    buttonFontColor: {
      type: String,
      default: 'warning'
    },
    customClass: {
      type: String,
      default: 'regular-bg'
    },
    flex: {
      type: Boolean,
      default: false
    },
    buttons: {
      type: (Array as unknown) as PropType<LandingSectionBannerButton[]>
    },
    section: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const buttonList = computed(() => {
      const list: LandingSectionBannerButton[] = [
        {
          buttonBgColor: props.buttonBgColor,
          buttonFontColor: props.buttonFontColor,
          buttonText: props.buttonText,
          buttonLink: props.buttonLink,
          external: props.external,
          post: props.post
        }
      ];

      if (props.buttons) list.splice(1, 0, ...props.buttons);

      return list;
    });
    return {
      buttonList
    };
  }
});
</script>
