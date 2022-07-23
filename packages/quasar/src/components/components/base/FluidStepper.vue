<template>
  <canvas :id="id" />
</template>

<script lang="ts">
import { defineComponent, toRef } from 'vue';
import { initStepper } from './stepper.hooks';
export default defineComponent({
  name: 'FluidStepper',
  props: {
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 100
    },
    steps: {
      type: Number,
      default: 4
    },
    active: {
      type: Number,
      default: 0
    },
    enableColor: String,
    disableColor: String
  },
  data: function () {
    return {
      id: null
    };
  },
  mounted() {
    this.id = this._uid;
    this.$nextTick(() => {
      initStepper(
        this.id,
        this.width,
        this.height,
        this.steps,
        toRef(this, 'active'),
        this.emit,
        this.enableColor,
        this.disableColor
      );
    });
  },
  methods: {
    emit(event: string, index: number) {
      this.$emit(event, index);
    }
  }
});
</script>
