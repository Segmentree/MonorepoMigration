<template>
  <div class="row">
    <div v-if="$q.screen.lt.md" class="col-12 row justify-center">
      <div>
        <img :src="mobileImage.filename" />
      </div>
    </div>
    <div
      class="col-md-6 col-lg-7 col-xl-8 info-container row justify-center items-center"
    >
      <div>
        <h1 class="w-600">{{ title }}</h1>
        <div class="font-30 w-400 info-text q-my-lg">{{ text }}</div>
        <q-list>
          <q-item
            class="q-pl-none"
            v-for="(item, i) in items"
            :key="'item-' + i"
          >
            <q-item-section avatar>
              <q-avatar>
                <q-icon :name="`img:${item.icon.filename}`" />
              </q-avatar>
            </q-item-section>
            <q-item-section
              :class="`font-${item.active ? '22' : '18'} w-${
                item.active ? 600 : 400
              } text-${item.active && 'primary'}`"
            >
              {{ item.info }}
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
    <div v-if="$q.screen.gt.sm" class="col-md-6 col-lg-5 col-xl-4">
      <q-img :src="image.filename" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
export default defineComponent({
  name: 'ContactInfo',
  components: {},
  props: {
    title: String,
    text: String,
    image: (Object as undefined) as PropType<{ filename: string }>,
    mobileImage: (Object as undefined) as PropType<{ filename: string }>,
    items: (Array as unknown) as PropType<
      { icon: { filename: string }; info: string; active: boolean }[]
    >
  },
  setup() {
    return {};
  }
});
</script>
