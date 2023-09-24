import * as yup from 'yup';

export const offerValidationSchema = yup.object().shape({
  discount: yup.number().integer().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  product_id: yup.string().nullable().required(),
});
