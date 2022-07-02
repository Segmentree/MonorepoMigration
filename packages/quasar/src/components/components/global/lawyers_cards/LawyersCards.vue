<template>
  <q-card flat bordered class="full-height lawyer-card-bg text-black q-py-lg">
    <q-card-section>
      <div class="row justify-center">
        <div class="col-4">
          <img :src="lawyer.img.filename" class="full-width" />
        </div>
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="row justify-center">
        <div class="col-12 text-center w-600">
          <h5>{{ lawyer.title }}</h5>
        </div>
        <div class="col-12 t3 text-center w-400">
          {{ lawyer.subtitle }}
        </div>
        <div class="col-12 row justify-center q-py-sm">
          <q-rating
            v-model="rating"
            class="rating-banner"
            disable
            color="yellow"
            size="18px"
            :max="stars_max"
            icon="img:/svg/star_unselected.svg"
            icon-selected="img:/svg/star.svg"
            icon-half="img:/png/star_half.png"
          />
        </div>
      </div>
    </q-card-section>

    <q-separator v-if="full_content" inset />

    <q-card-section v-if="full_content">
      <ul class="font-14 w-400">
        <li v-for="(item, i) in lawyer.list" :key="i" class="q-my-sm">
          {{ item }}
        </li>
      </ul>
    </q-card-section>
    <q-card-actions v-if="full_content" class="absolute-bottom q-my-lg">
      <div class="row full-width justify-center">
        <q-btn
          outline
          no-caps
          class="font-14 col-10"
          color="grey-14"
          :label="lawyer.action.key"
          @click="$emit(lawyer.action.emit)"
        />
      </div>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import { LawyerCard } from '../../../models/home/meet-some-of-the-specialized-lawyers';

export default defineComponent({
  name: 'LawyersCards',
  components: {},
  props: {
    lawyer: {
      type: (Object as unknown) as PropType<LawyerCard>
    },
    stars_max: {
      type: Number,
      default: 5
    },
    full_content: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const rating = computed({
      get: () => parseInt(props.lawyer.rating),
      set: () => emit('changeRating')
    });
    return { rating };
  }
});
</script>
