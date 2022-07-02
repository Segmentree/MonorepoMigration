import { ApiService } from '@ligo/shared/utils';

const PORTAL_ID = '4327817';
const ACCOUNTANT_FORM = '1dbc5081-68e7-4e23-a254-d7ccce61662d';
const URL = (form: string, portalId: string = PORTAL_ID) =>
  `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${form}`;

interface Field {
  name: string;
  value: string;
}

export const onSubmitAccountant = async (fields: Field[]) => {
  await ApiService.post(URL(ACCOUNTANT_FORM), {
    fields
  });
};

export const useValidations = () => {
  const required = (val: string) =>
    !!val || $t('validations.required_generic');
  const validEmail = (v: string) =>
    /.+@.+\..+.+/.test(v) || $t('validations.email_format');
  return { required, validEmail };
};
