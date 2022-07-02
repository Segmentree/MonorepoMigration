<template>
  <q-card class="bg-dark text-white">
    <q-card-section>
      <div class="q-mt-lg row justify-center">
        <h4>{{ title }}</h4>
      </div>
      <div class="row justify-center t2">{{ subtitle }}</div>
    </q-card-section>
    <q-form @submit="onSubmit" @reset="onReset">
      <q-card-section
        :class="`justify-center ${$q.screen.gt.xs ? 'q-mx-md' : ''}`"
      >
        <slot>
          <q-input
            bg-color="white"
            class="q-mt-lg"
            outlined
            placeholder="Your full name"
          />
        </slot>
      </q-card-section>
      <q-card-actions
        :class="`row justify-center ${
          $q.screen.gt.xs ? 'q-mx-lg' : 'q-mx-sm'
        } q-pb-md`"
      >
        <q-btn
          v-if="!sent"
          no-caps
          color="primary"
          filled
          size="lg"
          class="col-12"
          :loading="loading"
          type="submit"
        >
          <div class="t1">{{ action }}</div>
        </q-btn>
        <q-btn
          v-else
          no-caps
          color="primary"
          filled
          size="lg"
          class="col-12"
          icon="mdi-checkbox-marked-circle-outline"
          :loading="loading"
          type="submit"
        >
          <div class="t1">{{ action }}</div>
        </q-btn>
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MoreQuestionsCard',
  props: {
    title: { type: String },
    subtitle: { type: String },
    action: { type: String },
    loading: {
      type: Boolean,
      default: false
    },
    sent: {
      type: Boolean,
      default: false
    }
  },
  setup(_, { emit }) {
    const onSubmit = () => {
      emit('submit');
    };
    const onReset = () => {
      emit('reset');
    };

    return { onSubmit, onReset };
  }
});
</script>
