<template>
  <div>
    <more-questions-card
      :title="title"
      :subtitle="subtitle"
      :action="action"
      :sent="sent"
      :loading="loading"
      @submit="onSubmit"
    >
      <q-input
        v-model="name"
        bg-color="white"
        class="q-mt-lg"
        outlined
        :placeholder="placeholders[0].text"
        lazy-rules
        :rules="[required]"
      />
      <q-input
        v-model="email"
        bg-color="white"
        class="q-mt-xs"
        outlined
        :placeholder="placeholders[1].text"
        lazy-rules
        :rules="[required, validEmail]"
      />
      <q-input
        v-model="phone"
        bg-color="white"
        class="q-mt-xs"
        outlined
        :placeholder="placeholders[2].text"
      />
      <q-input
        v-model="company"
        bg-color="white"
        class="q-mt-lg"
        outlined
        :placeholder="placeholders[3].text"
      />
      <q-input
        v-model="area"
        bg-color="white"
        class="q-mt-lg"
        outlined
        :placeholder="placeholders[4].text"
      />
    </more-questions-card>
  </div>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { defineComponent, ref, PropType } from 'vue';
import { useI18n } from 'vue-i18n';
import { TextItem } from '../../../../models';
import {
  useValidations,
  onSubmitAccountant
} from '../../../global/more_questions_card/hubspot.hook';

export interface AccountantsMoreQuestionsProps {
  title: string;
  subtitle: string;
  placeholders: TextItem[];
}

export default defineComponent({
  name: 'AccountantsMoreQuestions',
  props: {
    title: { type: String },
    subtitle: { type: String },
    placeholders: {
      type: (Array as unknown) as PropType<TextItem[]>,
      required: true
    },
    action: { type: String }
  },
  setup() {
    const $q = useQuasar()
    const i18n = useI18n()
    const name = ref('');
    const email = ref('');
    const phone = ref('');
    const company = ref('');
    const area = ref('');

    const loading = ref(false);
    const sent = ref(false);

    const onSubmit = async () => {
      const fields = [
        {
          name: 'email',
          value: email.value
        },
        {
          name: 'firstname',
          value: name.value
        },
        {
          name: 'phone',
          value: phone.value
        },
        {
          name: 'company',
          value: company.value
        },
        {
          name: 'practice_area',
          value: area.value
        }
      ];

      try {
        loading.value = true;
        await onSubmitAccountant(fields);
        sent.value = true;
      } catch (e) {
        if (e.response.status == 400) {
          $q.notify({
            type: 'negative',
            position: 'top',
            message: i18n.t('validations.hubspot').toString()
          });
        }
      } finally {
        loading.value = false;
      }
    };

    const { required, validEmail } = useValidations(i18n);

    return {
      onSubmit,
      name,
      email,
      phone,
      company,
      area,
      required,
      validEmail,
      loading,
      sent
    };
  }
});
</script>
