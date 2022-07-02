<template>
  <section-component class="row q-px-sm" :margin-bottom="marginBottom">
    <div class="text-grey-14 column flex-center text-center">
      <span class="font-30 w-600 q-mb-sm" v-text="title" />
      <span class="font-18 q-mb-sm" v-text="subtitle" />
      <simple-button
        :button-text="buttonText"
        :button-link="buttonLink"
        :button-color="buttonColor"
        :emit="emit"
        :external="external"
        :custom-class="customButtonClass"
      />
    </div>
  </section-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SimpleButton from '../../global/SimpleButton.vue';
import SectionComponent from '../../global/Section.vue';

export default defineComponent({
  name: 'ContactUs',
  components: {
    SimpleButton,
    SectionComponent
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    },
    buttonLink: {
      type: String,
      required: true
    },
    emit: {
      type: Boolean,
      default: false
    },
    external: {
      type: Boolean,
      default: false
    },

    marginBottom: {
      type: Boolean,
      default: true
    },
    buttonColor: {
      type: String,
      default: 'primary'
    },
    customButtonClass: {
      type: String,
      default: 'c-minw-150 font-20 w-600'
    }
  }
});
</script>
