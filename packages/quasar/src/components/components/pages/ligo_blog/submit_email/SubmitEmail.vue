<template>
  <section-component>
    <q-form class="column text-center full-width" @submit="onSubmit">
      <span class="text-grey-14 font-30 w-600" v-text="title" />

      <div class="input-container row full-width justify-center">
        <q-input
          v-model="email"
          class="input-with-button col-xs col-sm-7 font-14 text-grey-1"
          :placeholder="placeholderText"
          :rules="rules"
          outlined
        />
        <q-btn
          v-if="!sent"
          type="submit"
          no-caps
          :loading="loading"
          :class="buttonCustomClass"
          :color="buttonColor"
          :text-color="buttomTextColor"
          :label="buttonText"
        />
        <q-btn
          v-else
          type="submit"
          no-caps
          :loading="loading"
          :class="buttonCustomClass"
          :color="buttonColor"
          :text-color="buttomTextColor"
          icon="mdi-checkbox-marked-circle-outline"
          :label="buttonText"
        />
      </div>
    </q-form>
  </section-component>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import SectionComponent from '../../../global/Section.vue';
import { useSubmitEmail } from './submit-email.hook';

export default defineComponent({
  name: 'SubmitEmail',
  components: {
    SectionComponent,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    placeholderText: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    buttonColor: {
      type: String,
      default: 'primary',
    },
    buttomTextColor: {
      type: String,
      default: 'white',
    },
    buttonCustomClass: {
      type: String,
      default: 'col-auto button-inside-input full-height w-600 font-20',
    },
  },
  setup() {
    const { loading, sent, email, rules, onSubmit } = useSubmitEmail(
      useI18n(),
      useQuasar()
    );

    return {
      loading,
      sent,
      email,
      rules,
      onSubmit,
    };
  },
});
</script>
