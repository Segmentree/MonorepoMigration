<template>
  <div class="section-padding row justify-center">
    <div class="col-12 col-md-11 col-lg-10 row justify-center">
      <div class="col-12 col-sm-7 col-md-5">
        <q-img :src="$q.screen.gt.xs ? img.filename : imgMobile.filename" />
      </div>
      <div
        :class="`col-11 col-md-7 col-lg-7 text-dark ${
          $q.screen.lt.md ? 'q-mt-xl' : 'c-pl-100'
        }`"
      >
        <div class="row items-center">
          <div class="col-1 row">
            <q-btn round class="q-pa-xs">
              <q-avatar :size="`${$q.screen.lt.sm ? '60' : '80'}px`">
                <q-img :src="avatar.filename" />
              </q-avatar>
            </q-btn>
          </div>
          <div class="col-11 col-md-9 col-lg-8" style="padding-left: 60px">
            <div class="w-600">
              <h4>{{ title }}</h4>
            </div>
            <div class="t2 w-400 text-grey-1">
              {{ subtitle }}
            </div>
          </div>
          <div class="col-12 col-md-11 q-mt-lg">
            <div :class="`t0 w-500 text-grey-5`">
              {{ text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
export default defineComponent({
  name: 'PrimeMinister',
  props: {
    title: String,
    subtitle: String,
    text: String,
    avatar: (Object as unknown) as PropType<{ filename: string }>,
    img: (Object as unknown) as PropType<{ filename: string }>,
    imgMobile: (Object as unknown) as PropType<{ filename: string }>
  }
});
</script>
