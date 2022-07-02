<template>
  <div class="section-padding section bg-grey-6 row justify-center">
    <div class="col-12 col-md-11 col-lg-10 row justify-center">
      <div class="col-11 col-md-6">
        <div class="col-12 w-600 text-grey-14">
          <h2>{{ title }}</h2>
        </div>
        <div class="col-12 w-400 text-grey-14 q-my-sm">
          <div class="s2">{{ subtitle }}</div>
        </div>
        <div class="col-12 q-mt-xl row">
          <a
            :href="
              btn_link + ($i18n['locale'] == 'nl' ? `?locale=nl` : '?locale=en')
            "
          >
            <base-button class="col-4" no-caps bg="primary" :text="btn_key" />
          </a>
        </div>
      </div>
      <div :class="`col-12 col-md-6 ${$q.screen.lt.md ? 'q-mt-xl' : ''}`">
        <div class="col-12 col-md-6">
          <q-img :src="image && image.filename" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { StoryblokImage } from '../../../../storyblook';
export default defineComponent({
  name: 'SevenDaysAWeekSupport',
  props: {
    title: { type: String },
    subtitle: { type: String },
    btn_key: { type: String },
    btn_link: { type: String },
    image: { type: (Object as unknown) as PropType<StoryblokImage> }
  }
});
</script>
