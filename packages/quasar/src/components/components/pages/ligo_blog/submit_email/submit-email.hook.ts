import { ApiService } from '@ligo/shared/utils';
import { QVueGlobals } from 'quasar';
import { ref } from 'vue';
import { Composer } from 'vue-i18n';
import { HubspotField } from '../../../../models/hubspot-field';

const PORTAL_ID = '4327817';
const ACCOUNTANT_FORM = '2ee08644-95cf-4039-95f0-7d7fdcd49f6d';

const URL = (form: string, portalId: string = PORTAL_ID) =>
  `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${form}`;

export const onSubmitEmail = async (fields: HubspotField[]) => {
  await ApiService.post(URL(ACCOUNTANT_FORM), {
    fields
  });
};

export const useSubmitEmail = (i18n: Composer, $q: QVueGlobals) => {
  const loading = ref(false);
  const sent = ref(false);
  const email = ref('');

  const rules = [
    (val: any) => !!val || i18n.t('validations.required_generic'),
    (val: any) => /.+@.+\..+.+/.test(val) || i18n.t('validations.email_format')
  ];

  const onSubmit = async () => {
    const BAD_REQUEST = 400;
    const EMAIL_FIELD_NAME = 'email';
    const response: HubspotField[] = [
      {
        name: EMAIL_FIELD_NAME,
        value: email.value
      }
    ];

    try {
      loading.value = true;
      await onSubmitEmail(response);
      sent.value = true;
    } catch (e: any) {
      if (e.response.status == BAD_REQUEST) {
        $q.notify({
          type: 'negative',
          position: 'top',
          message: i18n.t('validations.hubspot').toString()
        });
      } else {
        console.log('An error occurred while submitting the email: ' + e);
      }
    } finally {
      loading.value = false;
    }
  };

  return { loading, sent, email, rules, onSubmit };
};
