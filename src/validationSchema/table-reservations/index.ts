import * as yup from 'yup';

export const tableReservationValidationSchema = yup.object().shape({
  table_number: yup.number().integer().required(),
  reservation_time: yup.date().required(),
  guest_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
