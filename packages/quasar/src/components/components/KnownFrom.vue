<template>
  <section-component>
    <div class="row text-uppercase text-grey-1 justify-center w-600">
      <h5>{{ $t('known_from') }}</h5>
    </div>
    <div class="row justify-center">
      <q-img
        class="col-6 col-sm-3 col-md-4 col-lg-2"
        :width="size + 'px'"
        v-for="i in 6"
        :key="i"
        :src="`svg/partner_${i}.svg`"
      />
    </div>
  </section-component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useQuasar } from 'quasar'
import SectionComponent from '../components/global/Section.vue';

export default defineComponent({
  name: 'KnownFrom',
  components: { SectionComponent },
  setup() {
    const $q = useQuasar()
    const size = computed(() => {
      switch ($q.screen.name) {
        case 'xl':
          return 200;
        case 'lg':
          return 175;
        case 'md':
          return 150;
        case 'md':
          return 175;
        default:
          return 150;
      }
    });

    return { size };
  }
});
</script>
