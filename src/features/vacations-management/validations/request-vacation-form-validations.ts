import * as Yup from 'yup';

export const requestVacationFormValidations = Yup.object().shape({
  name: Yup.string()
    .required('El nombre es requerido')
    .min(3, 'El nombre debe tener al menos 3 caracteres'),
  startDate: Yup.date().required('Fecha de salida requerida'),
  lastDate: Yup.date()
    .required('Fecha de fin requerida')
    .min(Yup.ref('startDate'), 'La fecha de fin debe ser después de la salida'),
});
