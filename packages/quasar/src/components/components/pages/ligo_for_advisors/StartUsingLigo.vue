<template>
  <section-component>
    <div>
      <q-card
        square
        :class="`row full-width q-pa-lg  flex-center bg-${bgColor}`"
      >
        <div
          :class="`row col-xs-12 col-sm-5 q-my-sm  ${
            $q.screen.gt.xs && 'q-mr-xl'
          }`"
        >
          <span class="col-12 w-600 text-grey-14 font-30 q-mb-sm">
            {{ title }}
          </span>
          <span class="col-12 w-400 text-grey-14 font-20 q-mb-md">
            {{ subtitle }}
          </span>
          <q-list class="w-400 text-grey-5 font-18">
            <q-item
              v-for="(bulletPoint, i) in bulletPoints"
              :key="i"
              class="q-px-none q-ml-sm"
            >
              <q-icon name="mdi-check q-mr-sm" />
              <span> {{ bulletPoint.text }}</span>
            </q-item>
          </q-list>
        </div>
        <q-form
          class="row col-xs-12 col-sm-5 flex-center q-my-sm"
          @submit="onSubmit"
        >
          <q-input
            v-for="(field, i) in fields"
            :key="i"
            v-model="field.value"
            class="full-width text-grey-1 w-400 font-18"
            borderless
            outlined
            dense
            :color="inputMarkedColor"
            :bg-color="inputBgColor"
            :placeholder="placeholderMaker(field)"
            :rules="field.rules"
            :type="field.type"
          />
          <div :class="`q-mt-lg ${$q.screen.xs ? 'c-minw-100' : 'c-minw-150'}`">
            <q-btn
              v-if="!sent"
              class="font-20 full-width"
              no-caps
              dense
              :loading="loading"
              :label="buttonText"
              :color="buttonBgColor"
              :text-color="buttonTextColor"
              type="submit"
            />
            <q-btn
              v-else
              class="font-20 full-width"
              no-caps
              dense
              :loading="loading"
              :label="buttonText"
              :color="buttonBgColor"
              :text-color="buttonTextColor"
              type="submit"
              icon="mdi-checkbox-marked-circle-outline"
            />
          </div>
        </q-form>
      </q-card>
    </div>
  </section-component>
</template>

<script lang="ts">
const ASTERISK = '*';

import { useQuasar } from 'quasar';
import { defineComponent, PropType, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import SectionComponent from '../../global/Section.vue';
import { useStartUsingLigo } from './startusingligo.hook';

export default defineComponent({
  name: 'StartUsingLigo',
  components: { SectionComponent },
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    bulletPoints: {
      type: Array as unknown as PropType<string[]>,
      default: () => [],
    },
    buttonText: {
      type: String,
      required: true,
    },
    buttonLink: {
      type: String,
      required: true,
    },
    bgColor: {
      type: String,
      default: 'primary',
    },
    inputMarkedColor: {
      type: String,
      default: 'blue',
    },
    inputBgColor: {
      type: String,
      default: 'white',
    },
    buttonTextColor: {
      type: String,
      default: 'white',
    },
    buttonBgColor: {
      type: String,
      default: 'grey-14',
    },
  },

  setup() {
    const i18n = useI18n();
    const { loading, sent, fields, onSubmit } = useStartUsingLigo(
      i18n,
      useQuasar()
    );

    //`${$t(field.placeholderpath)} ${field.required && '*'}`
    const placeholderMaker = computed(() => {
      return (field) =>
        `${i18n.t(field.placeholderpath)} ${field.required ? ASTERISK : ''}`;
    });

    return {
      loading,
      sent,
      fields,

      onSubmit,
      placeholderMaker,
    };
  },
});
</script>
