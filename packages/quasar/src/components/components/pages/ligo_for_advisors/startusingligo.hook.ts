import { ApiService, RootContext } from '@ligo/shared/utils';
import { ref } from 'vue';
import { StartUsingLigoField } from '../../../models/ligo_for_advisors/start_using_ligo';

const PORTAL_ID = '4327817';
const ACCOUNTANT_FORM = '1dbc5081-68e7-4e23-a254-d7ccce61662d';
const URL = (form: string, portalId: string = PORTAL_ID) =>
  `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${form}`;

export const onSubmitStartUsingLigo = async (fields: StartUsingLigoField[]) => {
  await ApiService.post(URL(ACCOUNTANT_FORM), {
    fields
  });
};

const Validations = (root: RootContext) => {
  const require = (val) => !!val || root.$t('validations.required_generic');
  const validEmail = (val) =>
    /.+@.+\..+.+/.test(val) || root.$t('validations.email_format');

  return { require, validEmail };
};

export const getFlieds = (root: RootContext) => {
  const { require, validEmail } = Validations(root);

  const fields = [
    {
      placeholderpath: 'ligo_for_advisors.start_using_ligo.name',
      type: 'text',
      value: '',
      rules: [require],
      required: true
    },
    {
      placeholderpath: 'ligo_for_advisors.start_using_ligo.email',
      type: 'email',
      value: '',
      rules: [require, validEmail],
      required: true
    },
    {
      placeholderpath: 'ligo_for_advisors.start_using_ligo.phonenumber',
      type: 'tel',
      value: '',
      rules: [require],
      required: true
    },
    {
      placeholderpath: 'ligo_for_advisors.start_using_ligo.website',
      type: 'text',
      value: '',
      rules: [],
      required: false
    }
  ];

  return fields;
};

export const useStartUsingLigo = (root: RootContext) => {
  const loading = ref(false);
  const sent = ref(false);

  const fields = getFlieds(root);

  const onSubmit = async () => {
    const response = [
      {
        name: 'firstname',
        value: fields[0].value
      },
      {
        name: 'email',
        value: fields[1].value
      },
      {
        name: 'phone',
        value: fields[2].value
      },
      {
        name: 'website',
        value: fields[3].value
      }
    ];

    try {
      loading.value = true;
      await onSubmitStartUsingLigo(response);
      sent.value = true;
    } catch (e) {
      if (e.response.status == 400) {
        root.$q.notify({
          type: 'negative',
          position: 'top',
          message: root.$t('validations.hubspot').toString()
        });
      }
    } finally {
      loading.value = false;
    }
  };
  return { loading, sent, fields, onSubmit };
};
