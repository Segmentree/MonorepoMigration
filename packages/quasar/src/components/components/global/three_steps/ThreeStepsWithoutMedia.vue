<template>
  <section-component>
    <div class="row justify-center three-steps-without-video">
      <section-header
        :class="[
          `${$q.screen.lt.sm && 'full-width q-px-sm'}`,
          {
            'q-px-xl': $q.screen.gt.sm
          }
        ]"
        :title="title"
        :subtitle="subtitle"
        text-align="center"
      />
      <div class="col-12 row justify-center">
        <div
          v-for="step in steps"
          :key="step._uid"
          class="col-12 col-md-4 q-px-lg"
        >
          <step-card
            :title="step.title"
            :text="step.text"
            :icon="step.icon.filename"
          />
        </div>
      </div>
    </div>
  </section-component>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import SectionComponent from '../Section.vue';
import SectionHeader from '../SectionHeader.vue';
import { StepCard } from '../../../models';

export default defineComponent({
  name: 'ThreeStepsWithoutMedia',
  props: {
    title: { type: String },
    subtitle: { type: String },
    steps: { type: Array as PropType<StepCard[]> }
  },
  components: { SectionComponent, SectionHeader },
  setup() {
    const selectedMedia = ref(0);
    return { selectedMedia };
  }
});
</script>
