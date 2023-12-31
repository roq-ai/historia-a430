import * as yup from 'yup';

export const vendorValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  address: yup.string().nullable(),
  website: yup.string().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
