import * as yup from 'yup';

export const suggestionValidationSchema = yup.object().shape({
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  product_id: yup.string().nullable().required(),
  offer_id: yup.string().nullable().required(),
});
