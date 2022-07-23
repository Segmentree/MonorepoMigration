<template>
  <div class="full-width row justify-center">
    <div
      class="bg-white table-head-margin row col-12 justify-center items-center"
      :style="`width: ${
        $q.screen.xs ? mobileWidthPercent : desktopWidthPercent
      }%`"
    >
      <q-btn round flat icon="mdi-chevron-left" @click="$emit('previous')" />

      <div
        id="stepper-container"
        :ref="_uid + '-stepper-container'"
        :class="`col-${getSize}`"
      >
        <fluid-stepper
          v-if="!loading"
          :width="width"
          :height="height"
          :active="active"
          :steps="stepsNumber"
          :enable-color="enableColor"
          :disable-color="disableColor"
          @changeActive="changeActive"
        />
      </div>

      <q-btn round flat icon="mdi-chevron-right" @click="$emit('next')" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FluidStepper from './FluidStepper.vue'
export default defineComponent({
  name: 'BasicStepperWraper',
  components: { FluidStepper },
  props: {
    stepsNumber: {
      type: Number,
      default: 4
    },
    active: {
      type: Number,
      default: 0
    },
    enableColor: String,
    disableColor: String,
    mobileWidthPercent: {
      type: Number,
      default: 100
    },
    desktopWidthPercent: {
      type: Number,
      default: 100
    }
  },
  data: function () {
    return {
      width: 100,
      height: 100,
      loading: true
    };
  },
  computed: {
    getSize() {
      // For this kind of comparison is more efficient use if statement over switch statement just how it's done
      if (this.stepsNumber >= 6) return Math.min(this.stepsNumber, 8);
      if (this.stepsNumber >= 4) return '4';
      if (this.stepsNumber >= 2) return '3';
      return '2';
    }
  },
  mounted() {
    this.init();
    window.addEventListener('resize', () => {
      this.init();
    });
  },
  methods: {
    init() {
      this.loading = true;
      const container = this.$refs[this._uid + '-stepper-container'];
      if (container) {
        this.width = container.offsetWidth;
        this.height = container.offsetHeight;
      }
      this.$nextTick(() => {
        this.loading = false;
      });
    },
    changeActive(index: number) {
      this.$emit('changeActive', index);
    }
  }
});
</script>
